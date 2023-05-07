import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

const rout: Routes = [

  {
    path: '',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class LoginRoutingModule { }
