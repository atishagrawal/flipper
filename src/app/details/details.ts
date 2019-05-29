export class Details {
sender_data?: any = {};
receriver_data?: any;
detailsVisible = false;
action?: any = null;
title?: string = null;
component?: string = null;
module?: string = null;
reason?: string = null;
constructor(params: Object = {}) {
  for (const name in params) {
      this[name] = params[name];
  }
}
}
