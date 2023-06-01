import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    loadChildren:()=>import("./features/dashboard/dashboard.module").then(m=>m.DashboardModule)
  },
  {
    path:"auth",
    loadChildren:()=>import("./core/auth/auth.module").then(m=>m.AuthModule)
  },
  {
    path:"**",
    redirectTo:"auth"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
