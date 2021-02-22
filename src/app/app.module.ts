import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesingModule } from '../app/material/material.module';
import { AdminModule } from './users/admin/layout/admin.module';
import { LayoutModule } from './main/layout/layout.module';
import { NotFoundModule } from './main/not-found/not-found.module';
import { UnAuthorizeModule } from './main/un-authorize/un-authorize.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesingModule,
    LayoutModule,
    AdminModule,
    NotFoundModule,
    UnAuthorizeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
