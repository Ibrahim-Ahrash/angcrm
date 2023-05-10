import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbActionsModule, } from '@nebular/theme';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { FilterListComponent } from './services/filter-list/filter-list.component';
import { AddServicesComponent } from './services/add-services/add-services.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    FilterListComponent,
    AddServicesComponent,
  ],
  imports: [
    CommonModule,
    NbActionsModule,
    NbCardModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NbButtonModule,
    NbInputModule
  ]
})
export class ListModule { }
