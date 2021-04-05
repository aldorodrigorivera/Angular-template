import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationDialogComponent } from './reservation-dialog.component';
import { MaterialDesingModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesingModule
  ],
  declarations: [ReservationDialogComponent]
})
export class ReservationDialogModule { }
