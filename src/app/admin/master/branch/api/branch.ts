export class Branch {
  name?: string;
  description?: string;
  id?: number;
  branch_id?: number;
  active?: number;
  business_id?: number;
  created_at?: any;
  updated_at?: any;

  constructor(params: Object = {}) {
    for (const name in params) {
      this[name] = params[name];
    }
  }
}
