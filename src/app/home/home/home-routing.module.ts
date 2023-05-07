import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

const rout: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class HomeRoutingModule { }
