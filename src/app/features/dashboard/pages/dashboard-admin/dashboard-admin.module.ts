import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAdminRoutingModule } from './dashboard-admin-routing.module';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { DashboardAdminComponent } from './dashboard-admin.component';

import { PanelMenuModule } from 'primeng/panelmenu';
import { NewUsuarioComponent } from './usuarios/new-usuario/new-usuario.component';
import { NewRolComponent } from './roles/new-rol/new-rol.component';
import { PoustAllComponent } from './entradas/poust-all/poust-all.component';
import { CategoriasNewComponent } from './entradas/categorias-new/categorias-new.component';
import { EtiquetasNewComponent } from './entradas/etiquetas-new/etiquetas-new.component';
import { PoustNewComponent } from './entradas/poust-new/poust-new.component';
import { VersionComponent } from './home/version/version.component';
import { RolesAllComponent } from './roles/roles-all/roles-all.component';
import { UsuariosAllComponent } from './usuarios/usuarios-all/usuarios-all.component';
import { PerfilAdminComponent } from './usuarios/perfil-admin/perfil-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { ListboxModule } from 'primeng/listbox';
import { DropdownModule } from 'primeng/dropdown';
import { ContratoNewComponent } from './contrato/contrato-new/contrato-new.component';
import { ContratoAllComponent } from './contrato/contrato-all/contrato-all.component';
import { TrabajadorNewComponent } from './trabajador/trabajador-new/trabajador-new.component';
import { TrabajadorAllComponent } from './trabajador/trabajador-all/trabajador-all.component';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    DashboardAdminComponent,
    SidebarAdminComponent,
    NewUsuarioComponent,
    NewRolComponent,
    PoustAllComponent,
    CategoriasNewComponent,
    EtiquetasNewComponent,
    PoustNewComponent,
    VersionComponent,
    RolesAllComponent,
    UsuariosAllComponent,
    PerfilAdminComponent,
    ContratoNewComponent,
    ContratoAllComponent,
    TrabajadorNewComponent,
    TrabajadorAllComponent
  ],
  imports: [
    CommonModule,
    DashboardAdminRoutingModule,
    PanelMenuModule,
    InputTextModule,
    FileUploadModule,
    TableModule,
    RatingModule,
    TagModule,
    ButtonModule,
    MultiSelectModule,
    ReactiveFormsModule,
    ListboxModule,
    DropdownModule,
    CalendarModule
  ]
})
export class DashboardAdminModule { }
