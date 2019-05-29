import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ApiCustomerTypeService } from './api/api.service';
import { CustomerType } from './api/CustomerType';
import { UrlAwarePaginator } from '../../common/pagination/url-aware-paginator.service';
import { Modal } from '../../common/core/ui/dialogs/modal.service';
import { PaginatedDataTableSource } from '../../data-table/data/paginated-data-table-source';
import { ConfirmModalComponent } from '../../common/core/ui/confirm-modal/confirm-modal.component';
import { CrupdateCustomerTypeModalComponent } from './crupdate-customet-type-modal/crupdate-customer-type-modal.component';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { GlobalVariables } from '../../common/core/global-variables';

@Component({
  selector: 'app-customertype',
  templateUrl: './customertype.component.html',
  styleUrls: ['./customertype.component.scss'],
  providers: [UrlAwarePaginator],
  encapsulation: ViewEncapsulation.None,
})
export class CustomerTypeComponent implements  OnInit, OnDestroy {
  @ViewChild(MatSort) matSort: MatSort;
  @Input() public enableSelectButton = false;
  @Input() public selectedId = 0;
  @Output() valueChange = new EventEmitter<CustomerType>();

  public dataSource: PaginatedDataTableSource<CustomerType>;
  public loading = new BehaviorSubject(false);
  constructor(public v: GlobalVariables, public paginator: UrlAwarePaginator, private modal: Modal, private api: ApiCustomerTypeService) {

   }


  ngOnInit() {
    if (!this.enableSelectButton) {
    this.v.webTitle('Manage Customer Types');
    }
    this.dataSource = new PaginatedDataTableSource<CustomerType>({
        uri: 'customertype',
        dataPaginator: this.paginator,
        matSort: this.matSort
    });
  }
ngOnDestroy() {
  this.paginator.destroy();
}

/**
     * Delete currently selected users.
     */
    public deleteSelectedCustomerTypes() {
      const ids = this.dataSource.selectedRows.selected.map(cat => cat.id);
      this.loading.next(true);
      this.api.deleteMultiple(ids).pipe(finalize(() => this.loading.next(false))).subscribe(() => {
          this.paginator.refresh();
          this.dataSource.selectedRows.clear();
      });
  }
 /**
     * Ask user to confirm deletion of selected tags
     * and delete selected tags if user confirms.
     */
    public maybeDeleteSelectedCustomerTypes() {
      this.modal.show(ConfirmModalComponent, {
          title: 'Delete Customer Type',
          body:  'Are you sure you want to delete selected customer type(s)?',
          ok:    'Delete'
      }).afterClosed().subscribe(confirmed => {
          if ( ! confirmed) { return; }
          this.deleteSelectedCustomerTypes();
      });
  }

    /**
     * Show modal for editing user if user is specified
     * or for creating a new user otherwise.
     */
    public showCrupdateCustomerTypeModal(customertype?: CustomerType) {

      this.modal.open(
        CrupdateCustomerTypeModalComponent,
          {customertype},
          'crupdate-customer-type-modal-container'
      ).beforeClose().subscribe(data => {
          if ( ! data) { return; }
          this.paginator.refresh();
      });
  }

  selectCustomerType(customertype: CustomerType) {
    return this.valueChange.emit(customertype);
  }
}
