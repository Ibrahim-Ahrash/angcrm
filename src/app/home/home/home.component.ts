import { Component } from '@angular/core';
import { HomeModule } from '../home.module';

@Component({
  selector: 'app-home',
  template: `

  <nb-layout>
    <nb-layout-header fixed>Company Name</nb-layout-header>

    <nb-sidebar right></nb-sidebar>

    <nb-layout-column>
      Page Content <button nbButton>Hello World</button>
    </nb-layout-column>
  </nb-layout>

`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
