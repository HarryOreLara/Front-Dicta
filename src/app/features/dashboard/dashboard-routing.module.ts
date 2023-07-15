import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { DashboardEmployesComponent } from './pages/dashboard-employes/dashboard-employes.component';
import { DashboardUserComponent } from './pages/dashboard-user/dashboard-user.component';
import { NinosComponent } from './pages/dashboard-nav/ninos/ninos.component';

const routes: Routes = [
  {
    path:"",
    component:DashboardUserComponent
  },
  {
    path:"dashboardAdmin",
    loadChildren:()=>import("../dashboard/pages/dashboard-admin/dashboard-admin.module").then(m=>m.DashboardAdminModule)
  },
  {
    path:"dashboardEmployes",
    loadChildren:()=>import("../dashboard/pages/dashboard-employes/dashboard-employes.module").then(m=>m.DashboardEmployesModule)
  },
  {
    path:"nav",
    loadChildren:()=>import("../dashboard/pages/dashboard-nav/dashboard-nav.module").then(m=>m.DashboardNavModule)
  },
  {
    path:"**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
