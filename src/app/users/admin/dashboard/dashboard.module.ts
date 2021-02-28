import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MaterialDesingModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesingModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
