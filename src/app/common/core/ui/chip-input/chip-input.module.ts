import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipInputComponent } from './chip-input.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        MatChipsModule,
        MatIconModule,
        ReactiveFormsModule,
    ],
    declarations: [
        ChipInputComponent
    ],
    exports: [
        ChipInputComponent
    ]
})
export class ChipInputModule {
}
