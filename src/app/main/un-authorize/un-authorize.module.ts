import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnAuthorizeComponent } from './un-authorize.component';
import { MaterialDesingModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesingModule
  ],
  declarations: [UnAuthorizeComponent]
})
export class UnAuthorizeModule { }
