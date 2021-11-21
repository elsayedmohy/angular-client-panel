import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from './shared/routing/app-routing.module';
import {FirebaseModule} from "./shared/firebase/firebase.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";

import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NavbarComponent} from './components/navbar/navbar.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ClientDetailsComponent} from './components/client-details/client-details.component';
import {AddClientComponent} from './components/add-client/add-client.component';
import {ClientsComponent} from './components/clients/clients.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {EditClientComponent} from './components/edit-client/edit-client.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SnackBarService} from "./services/snack-bar.service";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ClientDetailsComponent,
    AddClientComponent,
    ClientsComponent,
    DashboardComponent,
    EditClientComponent,
    NotFoundComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    FirebaseModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
