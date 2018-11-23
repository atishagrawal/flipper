import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ItemsComponent, RemoveItemDialog } from "../items/items.component";
import { CategoriesComponent, RemoveCategoryDialog } from "../categories/categories.component";
import { MasterComponent } from "./master.component";
import { MaterialModule } from "../../../material/material.module";
import { ModalComponent } from "../modal/modal.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InsuranceComponent } from "../insurance/insurance.component";
import { MasterState } from "../../../state/master-state";
import { NgxsModule } from '@ngxs/store';
import { UiModule } from "../../../common/core/ui/ui.module";
import { MasterRoutingModule } from "./master-routing.module";
import { DetailsModule } from "../../../details/details.module";

@NgModule({
  imports: [CommonModule,MasterRoutingModule,DetailsModule, MaterialModule, FormsModule, UiModule, ReactiveFormsModule,NgxsModule.forFeature([MasterState])],
  exports: [
    ItemsComponent,
    CategoriesComponent,
    MasterComponent,
    ModalComponent,
    InsuranceComponent,
    RemoveItemDialog,
    RemoveCategoryDialog
  ],
  declarations: [
    ItemsComponent,
    CategoriesComponent,
    MasterComponent,
    ModalComponent,
    InsuranceComponent,
    RemoveItemDialog,
    RemoveCategoryDialog
  ],
  entryComponents: [RemoveItemDialog,RemoveCategoryDialog]
})
export class MasterModule {}
