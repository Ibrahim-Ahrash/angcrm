import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbActionsModule } from '@nebular/theme';
import { FilterListComponent } from './services/filter-list/filter-list.component';
import { AddServicesComponent } from './services/add-services/add-services.component';
import { NbCardModule } from '@nebular/theme/public_api';

@NgModule({
  declarations: [
    FilterListComponent,
    AddServicesComponent
  ],
  imports: [
    CommonModule,
    NbActionsModule,
    NbCardModule,
    FormsModule
  ]
})
export class ListModule { }
