import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademiaRoutingModule } from './academia-routing.module';
import { ServiciosComponent } from './servicios/servicios.component';
import { CursosComponent } from './cursos/cursos.component';
import { AcademiaComponent } from './academia.component';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AcademiaComponent,
    ServiciosComponent,
    CursosComponent
  ],
  imports: [
    CommonModule,
    AcademiaRoutingModule,
    ImageModule,
    CardModule,
    ButtonModule
  ]
})
export class AcademiaModule { }
