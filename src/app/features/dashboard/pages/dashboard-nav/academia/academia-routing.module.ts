import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AcademiaComponent } from './academia.component';

const routes: Routes = [
  {
    path:"academia", component: AcademiaComponent
  },
  {
    path:"cursos", component: CursosComponent
  },
  {
    path:"servicios", component: ServiciosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademiaRoutingModule { }
