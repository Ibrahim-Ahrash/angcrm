import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { FilterListComponent } from './services/services/filter-list/filter-list.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
