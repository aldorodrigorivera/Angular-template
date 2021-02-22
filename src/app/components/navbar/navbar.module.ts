import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MaterialDesingModule } from '../../material/material.module'
@NgModule({
  imports: [
    CommonModule,
    MaterialDesingModule,
],
  exports: [NavbarComponent],
  declarations: [NavbarComponent]
})
export class NavbarModule { }
