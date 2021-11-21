import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthenticatingGuard} from "../../guards/auth.guard"
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {LoginComponent} from '../../components/login/login.component';
import {RegisterComponent} from '../../components/register/register.component';
import {ClientDetailsComponent} from '../../components/client-details/client-details.component';
import {AddClientComponent} from '../../components/add-client/add-client.component';
import {ClientsComponent} from '../../components/clients/clients.component';
import {DashboardComponent} from '../../components/dashboard/dashboard.component';
import {EditClientComponent} from '../../components/edit-client/edit-client.component';
import {NotFoundComponent} from '../../components/not-found/not-found.component';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';

const appRoutes: Routes =[
  {path: "" , component:DashboardComponent, canActivate:[AuthenticatingGuard]},
  {path: "login" , component:LoginComponent},
  {path: "register" , component:RegisterComponent},
  // {path: "clients" , component:ClientsComponent},
  {path: "clients/client/:id" , component:ClientDetailsComponent, canActivate:[AuthenticatingGuard]},
  {path: "clients/add" , component:AddClientComponent, canActivate:[AuthenticatingGuard]},
  {path: "clients/client/edit/:id" , component:EditClientComponent, canActivate:[AuthenticatingGuard]},
  {path: "**" , component:NotFoundComponent},


]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
