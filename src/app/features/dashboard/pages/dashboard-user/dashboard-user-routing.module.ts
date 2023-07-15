import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { DashboardUserComponent } from './dashboard-user.component';

const routes: Routes = [
  {
    path:"",
    component:DashboardUserComponent
  },
  {
    path:"account",
    component:AccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardUserRoutingModule { }
