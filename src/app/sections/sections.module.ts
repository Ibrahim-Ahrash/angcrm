import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbActionsModule, NbButtonModule, NbCardModule, NbContextMenuModule,NbOverlayContainerAdapter, NbMenuModule, NbUserModule } from '@nebular/theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({

  imports: [
    CommonModule,
    NbActionsModule,
    NbUserModule,
    FontAwesomeModule,
    NbMenuModule,
    NbContextMenuModule,
    NbCardModule,
    NbButtonModule
  ]
})
export class SectionsModule { }
