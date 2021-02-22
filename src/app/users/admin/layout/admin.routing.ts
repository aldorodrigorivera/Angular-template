import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { ConfigComponent } from '../config/config.component';
import { ProfileComponent } from '../profile/profile.component';

export const AdminRoutes : Routes = [
  { path: '', component: ProfileComponent },
  { path: 'config', component: ConfigComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent },
]
