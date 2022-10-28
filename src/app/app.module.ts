import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule ,Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeentryComponent } from './employeeentry/employeeentry.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http'

const appRoutes:Routes=[
  {
    path:"",component:LoginComponent
  },
  {
    path:"empentry",component:EmployeeentryComponent
  },
  {
    path:"nav",component:NavbarComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeentryComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
