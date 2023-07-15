import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardUserComponent } from './pages/dashboard-user/dashboard-user.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';



@NgModule({
  declarations: [
    //DashboardUserComponent,
    //DashboardAdminComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,

  ]
})
export class DashboardModule { }
