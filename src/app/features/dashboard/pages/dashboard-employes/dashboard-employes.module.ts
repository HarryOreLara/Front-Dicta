import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardEmployesRoutingModule } from './dashboard-employes-routing.module';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardEmployesComponent } from './dashboard-employes.component';
import { NewPostComponent } from './entradas/new-post/new-post.component';
import { AllPostComponent } from './entradas/all-post/all-post.component';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { NewCategoriasComponent } from './entradas/new-categorias/new-categorias.component';
import { ButtonModule } from 'primeng/button';
import { NewEtiquetasComponent } from './entradas/new-etiquetas/new-etiquetas.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { AllUsuariosComponent } from './usuarios/all-usuarios/all-usuarios.component';
import { PerfilComponent } from './usuarios/perfil/perfil.component';
import { AllRolesComponent } from './roles/all-roles/all-roles.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    DashboardEmployesComponent,
    SidebarComponent,
    NewPostComponent,
    AllPostComponent,
    NewCategoriasComponent,
    NewEtiquetasComponent,
    AllUsuariosComponent,
    PerfilComponent,
    AllRolesComponent
  ],
  imports: [
    CommonModule,
    DashboardEmployesRoutingModule,
    PanelMenuModule,
    InputTextModule,
    FileUploadModule,
    TableModule,
    RatingModule,
    TagModule,
    ButtonModule,
    MultiSelectModule,
    ReactiveFormsModule
  ],
})
export class DashboardEmployesModule {}
