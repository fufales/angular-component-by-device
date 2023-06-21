import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestingLpComponent } from "./testing-lp/testing-lp.component";

const routes: Routes = [
  { path: 'test', component: TestingLpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
