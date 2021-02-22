import { Routes } from '@angular/router';
import { LayoutComponent } from './main/layout/layout.component';
import { NotFoundComponent } from './main/not-found/not-found.component';
import { UnAuthorizeComponent } from './main/un-authorize/un-authorize.component';
import { AdminComponent } from './users/admin/layout/admin.component';
import { CustomerComponent } from './users/customer/customer.component';

export const routing : Routes = [
  { path: '',component: LayoutComponent, children: [
    {
      path: '',
      loadChildren: () => import('./main/layout/layout.module').then(
        (m) => m.LayoutModule
      ),
    },
  ]},
  { path: 'admin',component: AdminComponent, children: [
    {
      path: '',
      loadChildren: () => import('./users/admin/layout/admin.module').then(
        (m) => m.AdminModule
      ),
    },
  ]},
  { path: 'cus', component: CustomerComponent },
  { path: 'unauthorized', component: UnAuthorizeComponent },
  { path: '**', component:NotFoundComponent }
]
