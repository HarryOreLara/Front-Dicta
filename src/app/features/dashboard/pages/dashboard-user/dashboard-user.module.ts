import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardUserRoutingModule } from './dashboard-user-routing.module';
import { AccountComponent } from './account/account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    DashboardUserRoutingModule,
    ReactiveFormsModule,
    ListboxModule,
    ButtonModule,
  ]
})
export class DashboardUserModule { }
