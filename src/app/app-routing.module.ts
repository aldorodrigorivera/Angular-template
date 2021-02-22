import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing'

@NgModule({
  imports: [RouterModule.forRoot(routing)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
