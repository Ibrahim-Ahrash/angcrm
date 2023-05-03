import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
// import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
// import { SidebarComponent } from '../sections/sidebar/sidebar.component';
import { NbSidebarModule } from '@nebular/theme';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    // NbLayoutModule,
    // NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    // NbButtonModule,
  ]
})
export class HomeModule { }
