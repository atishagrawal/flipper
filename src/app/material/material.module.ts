import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatRippleModule, MatCommonModule, MatNativeDateModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSliderModule } from "@angular/material/slider";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTreeModule } from "@angular/material/tree";
import {MatDatepickerModule} from '@angular/material/datepicker';

import { OverlayModule } from "@angular/cdk/overlay";

import { PortalModule } from "@angular/cdk/portal";

import { BidiModule } from "@angular/cdk/bidi";

import { A11yModule } from "@angular/cdk/a11y";

import { ObserversModule } from "@angular/cdk/observers";

import { NgModule } from "@angular/core";

const MATERIAL_MODULES = [
  MatAutocompleteModule,

  MatButtonModule,

  MatButtonToggleModule,

  MatCardModule,

  MatChipsModule,

  MatCheckboxModule,

  MatDatepickerModule,

  MatTableModule,

  MatDialogModule,

  MatFormFieldModule,

  MatGridListModule,

  MatIconModule,

  MatInputModule,

  MatListModule,

  MatMenuModule,
  MatTooltipModule,
  MatPaginatorModule,

  MatProgressBarModule,

  MatProgressSpinnerModule,

  MatRippleModule,

  MatSelectModule,

  MatSidenavModule,

  MatSliderModule,

  MatSlideToggleModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatTreeModule,
  MatSortModule,
  MatNativeDateModule,
  MatStepperModule,
  MatRadioModule,
  MatTabsModule,
  MatToolbarModule,
  OverlayModule,
  PortalModule,
  BidiModule,
  A11yModule,
  MatCommonModule,
  ObserversModule,
  MatBottomSheetModule
];

@NgModule({
  imports: MATERIAL_MODULES,

  declarations: [],
  exports: MATERIAL_MODULES
})
export class MaterialModule {}
