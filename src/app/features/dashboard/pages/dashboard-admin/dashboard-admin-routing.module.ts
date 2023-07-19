import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin.component';
import { NewUsuarioComponent } from './usuarios/new-usuario/new-usuario.component';
import { NewRolComponent } from './roles/new-rol/new-rol.component';
import { PoustAllComponent } from './entradas/poust-all/poust-all.component';
import { CategoriasNewComponent } from './entradas/categorias-new/categorias-new.component';
import { EtiquetasNewComponent } from './entradas/etiquetas-new/etiquetas-new.component';
import { PerfilAdminComponent } from './usuarios/perfil-admin/perfil-admin.component';
import { RolesAllComponent } from './roles/roles-all/roles-all.component';
import { VersionComponent } from './home/version/version.component';
import { UsuariosAllComponent } from './usuarios/usuarios-all/usuarios-all.component';
import { PoustNewComponent } from './entradas/poust-new/poust-new.component';
import { ContratoAllComponent } from './contrato/contrato-all/contrato-all.component';
import { ContratoNewComponent } from './contrato/contrato-new/contrato-new.component';
import { TrabajadorNewComponent } from './trabajador/trabajador-new/trabajador-new.component';
import { TrabajadorAllComponent } from './trabajador/trabajador-all/trabajador-all.component';
import { RolUpdateComponent } from './roles/rol-update/rol-update.component';
import { TrabajadorUpdateComponent } from './trabajador/trabajador-update/trabajador-update.component';
import { UsuarioUpdateComponent } from './usuarios/usuario-update/usuario-update.component';
import { PoustUpdateComponent } from './entradas/poust-update/poust-update.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardAdminComponent
  },
  {
    path:'newUsuario',//Disponible solo para el admin
    component: NewUsuarioComponent
  },
  {
    path:'newRol',//Disponible solo para el admin
    component: NewRolComponent
  },
  {
    path:'poust-all',
    component:PoustAllComponent
  },
  {
    path: 'poust-new',
    component: PoustNewComponent
  },
  {
    path: 'categoria-new',
    component: CategoriasNewComponent
  },
  {
    path: 'etiqueta-new',
    component: EtiquetasNewComponent
  },
  {
    path:'usuarios-all',
    component: UsuariosAllComponent
  },
  {
    path: 'perfilAdmin',
    component: PerfilAdminComponent
  },
  {
    path: 'roles',
    component: RolesAllComponent
  },
  {
    path: 'version',
    component: VersionComponent
  },
  {
    path:'contrato-all',
    component:ContratoAllComponent
  },
  {
    path: 'contrato-new',
    component: ContratoNewComponent
  },
  {
    path: 'trabajador-new',
    component: TrabajadorNewComponent
  },
  {
    path: 'trabajador-all',
    component: TrabajadorAllComponent
  },
  {
    path: 'rol-update/:id',
    component:RolUpdateComponent
  },
  {
    path: 'trabajador-update/:id',
    component: TrabajadorUpdateComponent
  },
  {
    path: 'usuario-update/:id',
    component: UsuarioUpdateComponent
  },
  {
    path: 'poust-update/:id',
    component: PoustUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAdminRoutingModule { }
