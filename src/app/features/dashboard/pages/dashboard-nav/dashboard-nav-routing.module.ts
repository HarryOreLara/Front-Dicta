import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NinosComponent } from './ninos/ninos.component';
import { JovenesComponent } from './jovenes/jovenes.component';
import { PadresComponent } from './padres/padres.component';
import { BlogComponent } from './blog/blog.component';
import { MundoDictarianoComponent } from './mundo-dictariano/mundo-dictariano.component';
import { AcademiaComponent } from './academia/academia.component';

const routes: Routes = [
  {
    path:"ninos",
    component:NinosComponent
  },
  {
    path:"jovenes",
    component: JovenesComponent
  },
  {
    path:"padres",
    component: PadresComponent
  },
  {
    path:"blog",
    component: BlogComponent
  },
  {
    path:"mundoDictariano",
    component: MundoDictarianoComponent
  },
  {
    path: "academia",
    loadChildren:()=>import("../dashboard-nav/academia/academia.module").then(m=>m.AcademiaModule)
  }
  // {
  //   path: "academia",
  //   component: AcademiaComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardNavRoutingModule { }
