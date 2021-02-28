import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { ConfigComponent } from '../config/config.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProfileComponent } from '../profile/profile.component';

export const AdminRoutes : Routes = [
  { path: '', component: DashboardComponent },
  { path: 'config', component: ConfigComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
]
