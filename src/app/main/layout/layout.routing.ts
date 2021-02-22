import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SingupComponent } from '../singup/singup.component';
import { LandingComponent } from '../landing/landing.component';

export const LayoutLandingRoutes : Routes = [
  { path: '', component: LandingComponent},
  { path: 'login', component: LoginComponent },
  { path: 'singup', component: SingupComponent },
]
