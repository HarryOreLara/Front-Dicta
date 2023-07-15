import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardEmployesComponent } from './dashboard-employes.component';
import { NewPostComponent } from './entradas/new-post/new-post.component';
import { AllPostComponent } from './entradas/all-post/all-post.component';
import { NewCategoriasComponent } from './entradas/new-categorias/new-categorias.component';
import { NewEtiquetasComponent } from './entradas/new-etiquetas/new-etiquetas.component';
import { AllUsuariosComponent } from './usuarios/all-usuarios/all-usuarios.component';
import { PerfilComponent } from './usuarios/perfil/perfil.component';
import { AllRolesComponent } from './roles/all-roles/all-roles.component';
import { VersionComponent } from './home/version/version.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardEmployesComponent,
  },
  {
    path: 'new-post',
    component: NewPostComponent,
  },
  {
    path: 'all-post',
    component: AllPostComponent
  },
  {
    path: 'new-categoria',
    component: NewCategoriasComponent
  },
  {
    path: 'new-etiqueta',
    component: NewEtiquetasComponent
  },
  {
    path: 'all-usuarios',
    component: AllUsuariosComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'roles',
    component: AllRolesComponent
  },
  {
    path: 'version',
    component: VersionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardEmployesRoutingModule {}
