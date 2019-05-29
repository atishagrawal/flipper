import { OrderItems } from '../pos/cart/order_items';
import { Customer } from '../customers/customer';
import { CustomerType } from '../setup/customerType/api/CustomerType';

export class Orders {

  id?: number;
  created_at?: Date;
  updated_at?: Date;
  status?: string;
  customer_id?: number;
  is_currently_processing: any;
  all?: string;
  user?: any;
  customer?: Customer;
  customer_type?: CustomerType;
  order_items?: OrderItems[] = [];
  branch_id?: number;
  business_id?: number;

  constructor(params: Object = {}) {
    for (const name in params) {
      this[name] = params[name];
    }
  }

}
