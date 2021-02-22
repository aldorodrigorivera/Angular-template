import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { MaterialDesingModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesingModule
  ],
  declarations: [NotFoundComponent]
})
export class NotFoundModule { }
