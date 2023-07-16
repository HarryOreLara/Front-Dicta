import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateChild } from '@angular/router';
import { NinosComponent } from './features/dashboard/pages/dashboard-nav/ninos/ninos.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [

  {
    path: "auth",
    //component: NinosComponent
    loadChildren:()=>import("./core/auth/auth.module").then(m=>m.AuthModule)
  },
  {
    path:"",
    loadChildren:()=>import("./features/dashboard/dashboard.module").then(m=>m.DashboardModule),
  },
  {
    path:"**",
    redirectTo:""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
