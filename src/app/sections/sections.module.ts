import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbActionsModule, NbButtonModule, NbCardModule, NbContextMenuModule,NbOverlayContainerAdapter, NbMenuModule, NbUserModule } from '@nebular/theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    NbActionsModule,
    NbUserModule,
    FontAwesomeModule,
    NbMenuModule,
    NbContextMenuModule,
    NbCardModule,
    NbButtonModule,
    SidebarComponent
  ],
  exports: [
      SidebarComponent,
  ]
})
export class SectionsModule { }
