import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { DashboardEmployesComponent } from './pages/dashboard-employes/dashboard-employes.component';
import { DashboardUserComponent } from './pages/dashboard-user/dashboard-user.component';

const routes: Routes = [
  {
    path:"",
    component:DashboardUserComponent
  },
  {
    path:"dashboardAdmin",
    component: DashboardAdminComponent
  },
  {
    path:"dashboardEmployes",
    component:DashboardEmployesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
