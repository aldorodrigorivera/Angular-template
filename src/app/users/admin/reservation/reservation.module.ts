import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation.component';
import { MaterialDesingModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesingModule
  ],
  declarations: [ReservationComponent]
})
export class ReservationModule { }
