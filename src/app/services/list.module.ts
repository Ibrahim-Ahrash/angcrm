import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbActionsModule } from '@nebular/theme';
import { FilterComponent } from './filter/filter/filter.component';
import { FiltComponent } from './filter/filt/filt.component';
import { FilterListComponent } from './services/filter-list/filter-list.component';
import { AddServicesComponent } from './services/add-services/add-services.component';

@NgModule({
  declarations: [
    FilterComponent,
    FiltComponent,
    FilterListComponent,
    AddServicesComponent
  ],
  imports: [
    CommonModule,
    NbActionsModule
  ]
})
export class ListModule { }
