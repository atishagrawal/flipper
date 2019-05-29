import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Category } from '../../categories/api/category';
import {  BehaviorSubject } from 'rxjs';
import { Business } from '../../../../business/api/business';
import { CurrentUser } from '../../../../common/auth/current-user';
import { Toast } from '../../../../common/core/ui/toast.service';
import { ApiItemService } from '../api/api.service';
import { Brand } from '../../brands/api/brand';
import { TAXRATE } from '../../../../setup/tax-rates/api/tax-rate';
import { MatSort } from '@angular/material/sort';
import { MatStepper } from '@angular/material/stepper';
import { Branch } from '../../branch/api/branch';
import { Reason } from '../../../../setup/reasons/api/reason';
import { finalize } from 'rxjs/operators';
import { CustomerType } from '../../../../setup/customerType/api/CustomerType';
import { Router } from '@angular/router';
import { Modal } from '../../../../common/core/ui/dialogs/modal.service';
import { SelectCategoryModelComponent } from '../../categories/select-category-model/select-category-model.component';
import { SelectBrandModalComponent } from '../../brands/select-brand-modal/select-brand-modal.component';
import { SelectTaxrateModalComponent } from '../../../../setup/tax-rates/select-taxrate-modal/select-taxrate-modal.component';
import { ApiBranchService } from '../../branch/api/api.service';
import { PaginatedDataTableSource } from '../../../../data-table/data/paginated-data-table-source';
import { UrlAwarePaginator } from '../../../../common/pagination/url-aware-paginator.service';
import { CrupdateCustomerTypeModalComponent } from '../../../../setup/customerType/crupdate-customet-type-modal/crupdate-customer-type-modal.component';
import { GlobalVariables } from '../../../../common/core/global-variables';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
  providers: [UrlAwarePaginator],
  encapsulation: ViewEncapsulation.None,
})
export class AddItemComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isOptional = false;
  categories: Category[] = [];
  brands: Brand[] = [];
  taxrates: TAXRATE[] = [];
  customertypes: CustomerType[] = [];
  customertype_default: CustomerType = null
  reasons: Reason[] = [];
  item_id: number = 0;
  business: Business;
  hiddenCheckBox:boolean=true;
  tax_rate_percentage=0.00;

  barcode_tool_tips = "The Universal Product Code is a unique and standard identifier typically shown under the bar code symbol";
  sku_tool_tips = "The Stock Keeping Unit  is a unique identifier defined by your company. For example, your company may assign a gallon of Tropicana orange juice a SKU of TROPOJ100. Most times, the SKU is represented by the manufacturer’s UPC. Leave blank to auto generate SKU.";
  public loading = new BehaviorSubject(false);
  errors: object;
  constructor(public v: GlobalVariables,public paginator: UrlAwarePaginator,private bapi:ApiBranchService,private modal: Modal,private router: Router, private _formBuilder: FormBuilder, public currentUser: CurrentUser,  private toast: Toast, private apiItem: ApiItemService) {
    this.loadingFormGroup();
   }
  rows: FormArray = this._formBuilder.array([]);

  panelOpenState = false;
  @ViewChild(MatSort) matSort: MatSort;
  @ViewChild('stepper') stepper:MatStepper;
  public dataSource: PaginatedDataTableSource<CustomerType>;

  branchList: Branch[] = [];
  branchs = new FormControl();
  ngOnInit() {
    this.v.webTitle('Add a Product');
    this.getActiveCustomerTypes();
    this.getBranches();
    this.loadingFormGroup();

  }

  loadingFormGroup() {
    this.firstFormGroup = this._formBuilder.group({
      item: ['', Validators.required],
      summary: [''],
      manufacturer: [''],
      category_id: ['', Validators.required],
      category:['', Validators.required],
      sku: [0, Validators.required],
      barcode: [0, Validators.required],
      brand_id: [null],
      brand:[''],
      tax_rate_id: [null],
      tax_rate:[''],
      product_order_code: [0],
      article_code: [0],
      currency: this.currentUser.get('business')[0].currency_code,
      recommended_retail_price: new FormControl(0.00),
      cost_price_excluding_tax: new FormControl(0.00),
      cost_price_including_tax: new FormControl(0.00),
      margin: new FormControl(0.00),

    });
    const numberPatern = '^[0-9.,]+$';
    this.thirdFormGroup = new FormGroup({
      qty: new FormControl(0.00),
      min_stock: new FormControl(0.00, [Validators.required, Validators.pattern(numberPatern)]),
      max_stock: new FormControl(0.00, [Validators.required, Validators.pattern(numberPatern)]),
      on_order: new FormControl(0.00, [Validators.required, Validators.pattern(numberPatern)]),
      show_alert: new FormControl(0),
      unit_of_sale: new FormControl('units'),
      unit_of_volume: new FormControl(0),
      reason_id: new FormControl(null),
      transction_date: new FormControl(new Date()),
      expired_date: new FormControl(null),
      currency: new FormControl(this.currentUser.get('business')[0].currency_code),
      comments: new FormControl('New stock'),
      unit_price: new FormControl(0.00),
      tax_rate_id: new FormControl(null)
    });

    this.secondFormGroup = new FormGroup({
      recommended_retail_price: new FormControl(0.00),
      cost_price_excluding_tax: new FormControl(0.00, [Validators.required, Validators.pattern(numberPatern)]),
      sale_price_excluding_tax: new FormControl(0.00, [Validators.required, Validators.pattern(numberPatern)]),
      cost_price_including_tax: new FormControl(0.00, [Validators.required, Validators.pattern(numberPatern)]),
      sale_price_including_tax: new FormControl(0.00, [Validators.required, Validators.pattern(numberPatern)]),
      margin: new FormControl(0.00),
      price_setting: this.rows
    });
  }

  addRow(d?: CustomerType, noUpdate?: boolean) {
    const numberPatern = '^[0-9.,]+$';
    const row = new FormGroup({
      //TODO:
      customer_type_id: new FormControl(d && d.customer_type_id ? d.customer_type_id : null, [Validators.required]),
      name: new FormControl(d && d.name ? d.name : null, [Validators.required]),
      sale_price_including_tax: new FormControl(0.00, [Validators.required, Validators.pattern(numberPatern)]),
      sale_price_excluding_tax: new FormControl(0.00, [Validators.required, Validators.pattern(numberPatern)]),
    });
    this.rows.push(row);
  }
  ngOnDestroy() {
    this.paginator.destroy();
  }

  getActiveCustomerTypes() {
    this.dataSource = new PaginatedDataTableSource<CustomerType>({
      uri: 'customertype',
      dataPaginator: this.paginator,
      matSort: this.matSort
  });

      this.dataSource._data.subscribe(row=> this.getRows(row));


  }
  getRows(d?:CustomerType[]){
    if(d && d.length > 0){
        d.forEach(e=>{
          this.addRow(e);
        });
    }
  }
  getBranches() {
    this.bapi.get().subscribe(res => {
      if (res.branches.length > 0) {
        this.branchList = res.branches;
      }
    });

  }
  public showCrupdateCustomerTypeModal(customertype?: CustomerType) {

    this.modal.open(
      CrupdateCustomerTypeModalComponent,
        {customertype},
        'crupdate-customer-type-modal-container'
    ).beforeClose().subscribe(data => {
        if ( ! data) return;
        this.paginator.refresh();
    });
}
  ///////////////////////////// Item
  // get recommended_retail_price() {
  //   return this.secondFormGroup.get("recommended_retail_price");
  // }
  get cost_price_excluding_tax() {
    return this.secondFormGroup.get("cost_price_excluding_tax");
  }
  get sale_price_excluding_tax() {
    return this.secondFormGroup.get("sale_price_excluding_tax");
  }
  get cost_price_including_tax() {
    return this.secondFormGroup.get("cost_price_including_tax");
  }
  get sale_price_including_tax() {
    return this.secondFormGroup.get("sale_price_including_tax");
  }
  // get margin() {
  //   return this.secondFormGroup.get("margin");
  // }

  get item() {
    return this.firstFormGroup.get("item");
  }
  get barcode() {
    return this.firstFormGroup.get("barcode");
  }
  get brand_id() {
    return this.firstFormGroup.get("brand_id");
  }
  get brand() {
    return this.firstFormGroup.get("brand");
  }
  //
  get tax_rate_id() {
    return this.firstFormGroup.get("tax_rate_id");
  }
  get tax_rate() {
    return this.firstFormGroup.get("tax_rate");
  }

  ///////////////////////////// Item
  get category_id() {
    return this.firstFormGroup.get("category_id");
  }
  get category() {
    return this.firstFormGroup.get("category");
  }

  get reason_id() {
    return this.thirdFormGroup.get("reason_id");
  }
  get sku() {
    return this.firstFormGroup.get("sku");
  }
  get product_order_code() {
    return this.firstFormGroup.get("product_order_code");
  }
  get article_code() {
    return this.firstFormGroup.get("article_code");
  }
  get manufacturer() {
    return this.firstFormGroup.get("manufacturer");
  }

  get unit_of_sale() {
    return this.thirdFormGroup.get("unit_of_sale");
  }
  get min_stock() {
    return this.thirdFormGroup.get("min_stock");
  }
  get max_stock() {
    return this.thirdFormGroup.get("max_stock");
  }
  get on_order() {
    return this.thirdFormGroup.get("on_order");
  }
  get show_alert() {
    return this.thirdFormGroup.get("show_alert");
  }
  get unit_of_volume() {
    return this.thirdFormGroup.get("unit_of_volume");
  }
  get qty() {
    return this.thirdFormGroup.get("qty");
  }


  close() {
    this.router.navigate(["/admin/setup"]);
    //localStorage.setItem('add-item', 'No');
  }



calculateCostIncludingTax(event){
  const inputed_value=event.target.value;
  this.secondFormGroup.get('cost_price_including_tax').setValue(this.calculateTax(this.getTax(), inputed_value, null,  'inc'));

}


calculateCostExcludingTax(event){
  const inputed_value=event.target.value;
  this.secondFormGroup.get('cost_price_excluding_tax').setValue(this.calculateTax(this.getTax(), inputed_value, null,  'exc'));

}

calculateSaleIncludingTax(event){
  const inputed_value=event.target.value;
  this.secondFormGroup.get('sale_price_including_tax').setValue(this.calculateTax(this.getTax(), inputed_value, null,  'inc'));

}
calculateSaleExcludingTax(event){
  const inputed_value=event.target.value;
  this.secondFormGroup.get('sale_price_excluding_tax').setValue(this.calculateTax(this.getTax(), inputed_value, null,  'exc'));

}



  calculateTax(tax, inputed_value, object, type = 'inc') {
    const value:number = inputed_value;
    const taxs:number= parseFloat(1+'.'+parseInt(tax));

    if (type === "inc") {
      const res= (value * taxs).toString();
      return parseFloat(res).toFixed(2);
    } else if (type === "exc") {
      const res= (value / taxs).toString();
      return parseFloat(res).toFixed(2);
    }


  }


  getTax() {
    return this.tax_rate_percentage ;
  }

  saveComplete(close:boolean=false) {

    if (this.branchs.valid && this.firstFormGroup.valid && this.secondFormGroup.valid && this.thirdFormGroup.valid) {
      this.firstFormGroup.value.summary = this.firstFormGroup.value.summary ? this.firstFormGroup.value.summary : 'None';
      this.firstFormGroup.value.manufacturer = this.firstFormGroup.value.manufacturer ? this.firstFormGroup.value.manufacturer : 'None';
      this.thirdFormGroup.value.tax_rate_id = this.firstFormGroup.value.tax_rate_id ? this.firstFormGroup.value.tax_rate_id : null;

      this.firstFormGroup.value.cost_price_excluding_tax = this.secondFormGroup.value.cost_price_excluding_tax;
      this.firstFormGroup.value.cost_price_including_tax = this.secondFormGroup.value.cost_price_including_tax;
      const active_branch = parseInt(localStorage.getItem('active_branch'));
      const data = {
        item: this.firstFormGroup.value,
        sale_price_excluding_tax:this.secondFormGroup.value.sale_price_excluding_tax,
        sale_price_including_tax:this.secondFormGroup.value.sale_price_including_tax,
        pricing: this.secondFormGroup.value.price_setting,
        stock: this.thirdFormGroup.value,
        branchs: this.branchs.value,
        main_branch: active_branch
      }
      this.loading.next(true);
      return this.create(data,close);
    } else {
      alert('Invalid input!');
    }

  }


  create(data,close?:boolean) {
    this.apiItem.create(data).pipe(finalize(() => this.loading.next(false)))
    .subscribe(response => {
        if(response)
            this.loadingFormGroup();
            this.stepper.selectedIndex = 0;
            this.toast.open('Product has been created');
            if(close){
              setTimeout(()=>{ this.loading.next(true);this.close() }, 3000);
            }
    }, error => {
        this.handleErrors(error);
    });
  }
  public handleErrors(response: {messages: object} = {messages: {}}) {
    this.errors = response.messages || {};
}

  uniqueArray(arr) {
    let obj = {};
    arr = Object.keys(arr.reduce((prev, next) => {
      if (!obj[next.customer_type_id]) obj[next.customer_type_id] = next;
      return obj;
    }, obj)).map((i) => obj[i]);
    return arr;
  }

  public showChooseCategoryModal() {
    this.modal.open(
      SelectCategoryModelComponent,
        {enabled:true,
          category_id:this.firstFormGroup.value.category_id?this.firstFormGroup.value.category_id:null},
        'select-category-modal-container'
    ).beforeClose().subscribe(data => {
        if ( ! data) return;
        this.firstFormGroup.get('category_id').setValue(data.id);
        this.firstFormGroup.get('category').setValue(data.name);
    });
}
  showChooseBrandModal() {
    this.modal.open(
      SelectBrandModalComponent,
        {enabled:true,
          brand_id:this.firstFormGroup.value.brand_id?this.firstFormGroup.value.brand_id:null},
        'select-brand-modal-container'
    ).beforeClose().subscribe(data => {
        if ( ! data) return;
        this.firstFormGroup.get('brand_id').setValue(data.id);
        this.firstFormGroup.get('brand').setValue(data.name);
    });
  }
  showChooseTaxRateModal() {
    this.modal.open(
      SelectTaxrateModalComponent,
        {enabled:true,
          tax_rate_id:this.firstFormGroup.value.tax_rate_id?this.firstFormGroup.value.tax_rate_id:null},
        'select-taxrate-modal-container'
    ).beforeClose().subscribe(data => {
        if ( ! data) return;
        this.firstFormGroup.get('tax_rate_id').setValue(data.id);
        this.firstFormGroup.get('tax_rate').setValue(data.name+'('+data.percentage+'%)');
        this.tax_rate_percentage=data.percentage;
    });
  }
}
