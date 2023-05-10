import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NbThemeModule, NbButtonModule, NbLayoutModule, NbCardModule, NbContextMenuModule, NbSidebarModule, NbUserModule, NbMenuModule, NbDialogModule, NbToastrModule, NbActionsModule, NbPopoverModule, NbInputModule } from '@nebular/theme';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './sections/header/header.component';
import { SidebarComponent } from './sections/sidebar/sidebar.component';
import { ListComponent } from './services/services/list/list.component';
import { FilterComponent } from 'ag-grid-community/dist/lib/components/framework/componentTypes';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TokenIntersiptService } from './@services/token-intersipt.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyComponent } from './services/company/company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    ListComponent,
    CompanyComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot(),
    FontAwesomeModule,
    NbActionsModule,
    NbUserModule,
    NbContextMenuModule,
    HttpClientModule,
    AgGridModule,
    BrowserAnimationsModule,
    FormsModule,
    NbPopoverModule,
    NbCardModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbInputModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntersiptService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
