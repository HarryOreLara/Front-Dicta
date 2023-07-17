import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListBlogComponent } from 'src/app/features/blog/list-blog/list-blog.component';

import { DashboardNavRoutingModule } from './dashboard-nav-routing.module';
import { NinosComponent } from './ninos/ninos.component';
import { JovenesComponent } from './jovenes/jovenes.component';
import { PadresComponent } from './padres/padres.component';
import { BlogComponent } from './blog/blog.component';
import { MundoDictarianoComponent } from './mundo-dictariano/mundo-dictariano.component';

import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { ImageModule } from 'primeng/image';
import { AnimateModule } from 'primeng/animate';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
@NgModule({
  declarations: [
    NinosComponent,
    JovenesComponent,
    PadresComponent,
    BlogComponent,
    MundoDictarianoComponent,
    ListBlogComponent
    
  ],
  imports: [
    CommonModule,
    DashboardNavRoutingModule,
    ChartModule,
    ButtonModule,
    SplitterModule,
    CardModule,
    TimelineModule,
    ImageModule,
    AnimateModule,
    CarouselModule,
    TagModule 
  ]
})
export class DashboardNavModule { }
