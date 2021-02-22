import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesingModule } from 'src/app/material/material.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { LayoutLandingRoutes } from './layout.routing'
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { LandingModule } from '../landing/landing.module';
import { LoginModule } from '../login/login.module';
import { SingUpModule } from '../singup/singup.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesingModule,
    NavbarModule,
    LandingModule,
    LoginModule,
    SingUpModule,
    RouterModule.forChild(LayoutLandingRoutes),
  ],
  declarations: [LayoutComponent],
})
export class LayoutModule { }
