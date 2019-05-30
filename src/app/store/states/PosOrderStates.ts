 import { Action, Selector, State, StateContext, Store } from '@ngxs/store';

import { tap } from 'rxjs/internal/operators/tap';
import { PosOrdersState, OrdersApiIndexParams } from '../model/pos-order-state-model';
import { POS_ORDER_STATE_MODEL_DEFAULTS } from '../model/pos-order-state';
import { LoadOrderEntriesAction, LoadMoreOrderEntries, LoadOrderEntries, OrderAction, CurrentOrder, LoadCurrentOrder, CustomerOrder, CustomerAction, CreateInvoice, InvoiceAction, InvoiceDetails } from '../actions/pos-Order.action';
import { ApiOrderService } from '../../orders/orders/api/api.service';
import { Orders } from '../../orders/orders';
import { finalize } from 'rxjs/operators';
import { Invoice } from '../../invoices/invoice';

@State<PosOrdersState>({
  name: 'ORDER',
  defaults: POS_ORDER_STATE_MODEL_DEFAULTS,
})

export class PosOrderState {
  constructor(private api: ApiOrderService, private store: Store) { }
  @Selector()
  static entries(state: PosOrdersState) {
    return state.data;
  }

  @Selector()
  static selectedOrders(state: PosOrdersState) {
    return state.order;
  }
  @Selector()
  static entriesEmpty(state: PosOrdersState) {
    // only return true if entries have already loaded
    return state.meta.current_page && !state.loading && state.data.length === 0;
  }
  @Selector()
  static meta(state: PosOrdersState) {
    return state.meta;
  }
// CustomerOrder
@Selector()
  static customerOrder(state: PosOrdersState) {
    return state.customer;
  }
  @Selector()
  static loading(state: PosOrdersState) {
    return state.loading;
  }
  @Selector()
  static currentPage(state: PosOrdersState) {
    return state.meta.current_page;
  }

  @Selector()
  static currentInvoice(state: PosOrdersState) {
    return state.invoice;
  }


  @Selector()
  static sortColumn(state: PosOrdersState) {
    return state.meta.sort_column;
  }
  @Selector()
  static sortDirection(state: PosOrdersState) {
    return state.meta.sort_direction;
  }
  @Selector()
  static canLoadMoreEntries(state: PosOrdersState) {
    return state.meta.current_page < state.meta.last_page;
  }
  private transformQueryParams(params: OrdersApiIndexParams): OrdersApiIndexParams {
    const meta = this.store.selectSnapshot(PosOrderState.meta);
    const queryParams = {
      order_by: meta.sort_column,
      order_dir: meta.sort_direction,
      ...params
    };
    if (meta.query) {
      queryParams.query = meta.query;
    }
    if (meta.type) {
      queryParams.type = meta.type;
    }
    return queryParams;
  }

  @Action(CustomerOrder)
  customerOrder(ctx: StateContext<PosOrdersState>, action: CustomerAction) {
    const oldState = ctx.getState();
           oldState.customer = action.customer;
           oldState.loading = false;
        return ctx.patchState(oldState);
  }
  @Action(CreateInvoice)
  createInvoices(ctx: StateContext<PosOrdersState>, action: InvoiceAction) {
    ctx.patchState({ loading: true });

   return this.api.createInvoice(action.invoice).pipe(tap(response => {
        this.store.dispatch(new InvoiceDetails(response as Invoice));
         this.store.dispatch(new CurrentOrder());
        return this;
    }));
  }

  @Action(InvoiceDetails)
  invoicesDetails(ctx: StateContext<PosOrdersState>, action: InvoiceAction) {
    const oldState = ctx.getState();
    oldState.invoice = action.invoice;
    oldState.loading = false;
 return ctx.patchState(oldState);
  }


  @Action(LoadOrderEntries)
  @Action(LoadMoreOrderEntries)
  loadOrdersEntries(ctx: StateContext<PosOrdersState>, action: LoadOrderEntriesAction) {
    const oldState = ctx.getState(), newState = { loading: true, meta: { ...oldState.meta } } as Partial<PosOrdersState>;
    newState.meta.sort_column = action.queryParams.order_by ;
    newState.meta.sort_direction = action.queryParams.order_dir;
   // if it's not search page, clear type and query
    newState.meta.query = action.queryParams.query || newState.meta.query;
    newState.meta.type = action.queryParams.type || newState.meta.type;
    ctx.patchState(newState);
    const params = this.transformQueryParams({
      ...action.queryParams
    });
    return this.api.getEntries(params).pipe(tap(response => {
      const entries = action.loadMore ? oldState.data : [];
      const state = {
        data: entries.concat(response.data),
        meta: {
          ...newState.meta,
          last_page: response.last_page,
          current_page: response.current_page,
          from: response.from,
          to: response.to,
          total: response.total,
          per_page: response.per_page,
          path: response.path,
          next_page_url: response.next_page_url,
          prev_page_url: response.prev_page_url
        },
        loading: false
      } as Partial<PosOrdersState>;

      return ctx.patchState(state);
    }, () => {
      return ctx.patchState({ loading: false });
    }));
  }

  @Action(CurrentOrder)
  showCurrentOrder(ctx: StateContext<PosOrdersState>) {
    const currentState = ctx.getState();
    ctx.patchState({ loading: true });

          return this.api.getCurrentOrder().pipe(tap(response => {
           if (response) {
            currentState.order = response as Orders;
            currentState.loading = false;
            currentState.customer = currentState.order.customer;
             ctx.patchState(currentState as Partial<PosOrdersState>);
           } else {
            currentState.order = null;
            currentState.loading = false;
            currentState.customer = null;
             ctx.patchState(currentState as Partial<PosOrdersState>);
           }

              return this.store.dispatch(new CustomerOrder(currentState.customer));
          }, () => {
              return ctx.patchState({ loading: false });
          }));


  }

 }
