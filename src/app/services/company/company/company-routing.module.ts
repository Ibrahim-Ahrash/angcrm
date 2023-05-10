import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { CompanyComponent } from './company.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CompanyRoutingModule { }
