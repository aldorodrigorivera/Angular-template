import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { MaterialDesingModule } from 'src/app/material/material.module';
@NgModule({
  imports: [
    CommonModule,
    MaterialDesingModule,
  ],
  declarations: [LandingComponent],
})
export class LandingModule { }
