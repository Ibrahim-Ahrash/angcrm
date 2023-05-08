import { SidebarComponent } from './../../sections/sidebar/sidebar.component';
import { Component } from '@angular/core';
import { HomeModule } from '../home.module';

@Component({
  selector: 'app-home',
  template: `
  <nb-layout>
    <nb-layout-header>
      <app-header class="w-100"></app-header></nb-layout-header>

    <nb-sidebar right><app-sidebar></app-sidebar></nb-sidebar>

    <nb-layout-column class="p-3">
      <app-list></app-list>
    </nb-layout-column>
  </nb-layout>
  <!-- <app-filter-list></app-filter-list> -->

`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
