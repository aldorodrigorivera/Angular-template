import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesingModule } from 'src/app/material/material.module';
import { LoginComponent } from './login.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialDesingModule,
  ],
  declarations: [LoginComponent],
})
export class LoginModule { }
