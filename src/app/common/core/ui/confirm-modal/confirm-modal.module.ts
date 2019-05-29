import { NgModule } from "@angular/core";
import { ConfirmModalComponent } from "./confirm-modal.component";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { Modal } from "../dialogs/modal.service";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [MatDialogModule, MatButtonModule, MatIconModule, CommonModule],
  declarations: [ConfirmModalComponent],
  entryComponents: [ConfirmModalComponent],
  exports: [ConfirmModalComponent],
  providers: [Modal]
})
export class ConfirmModalModule {}
