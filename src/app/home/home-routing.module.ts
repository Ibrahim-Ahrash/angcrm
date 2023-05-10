import { CompanyModule } from './../services/company/company/company.module';
import { CompanyComponent } from './../services/company/company/company.component';
import { ListModule } from './../services/list.module';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

const rout: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'services',
        loadChildren: () => import("../services/list.module").then(m => m.ListModule)
      },
      {
        path: 'customers',
        loadChildren: () => import("../services/company/company/company-routing.module").then(m => m.CompanyModule)
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class HomeRoutingModule { }
