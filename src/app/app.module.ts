import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NbThemeModule, NbLayoutModule,NbContextMenuModule, NbOverlayContainerAdapter,NbIconLibraries, NbSidebarModule,NbUserModule, NbMenuModule, NbDialogModule, NbToastrModule,NbActionsModule } from '@nebular/theme';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './sections/header/header.component';
import { SidebarComponent } from './sections/sidebar/sidebar.component';
import { ListComponent } from './services/services/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    ListComponent
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
    NbContextMenuModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
