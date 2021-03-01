import { NgModule } from '@angular/core';

import { MatSliderModule } from 'node_modules/@angular/material/slider';
import { MatButtonModule } from 'node_modules/@angular/material/button';
import { MatToolbarModule } from 'node_modules/@angular/material/toolbar';
import { MatIconModule } from 'node_modules/@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

const modules = [
  MatSliderModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatMenuModule,
];
@NgModule({
  imports:modules,
  exports:modules
})
export class MaterialDesingModule {}
