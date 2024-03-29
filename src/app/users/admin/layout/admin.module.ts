import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MaterialDesingModule } from 'src/app/material/material.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { ConfigModule } from '../config/config.module';
import { ProfileModule } from '../profile/profile.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { ReservationModule } from '../reservation/reservation.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesingModule,
    NavbarModule,
    ProfileModule,
    DashboardModule,
    ReservationModule,
    ConfigModule,
    RouterModule.forChild(AdminRoutes),
  ],
  declarations: [AdminComponent],
})
export class AdminModule { }
