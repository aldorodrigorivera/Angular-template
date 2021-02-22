import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesingModule } from 'src/app/material/material.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SingupComponent } from './singup.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialDesingModule,
    NavbarModule,
  ],
  declarations: [SingupComponent],
})
export class SingUpModule { }
