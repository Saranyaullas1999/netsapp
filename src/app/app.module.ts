import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule ,Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeentryComponent } from './employeeentry/employeeentry.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { TestingComponent } from './testing/testing.component'

const appRoutes:Routes=[
  {
    path:"",component:LoginComponent
  },
  {
    path:"empentry",component:EmployeeentryComponent
  },
  {
    path:"nav",component:NavbarComponent
  },
  {
    path:"searchemp",component:SearchEmployeeComponent
  },
  {
    path:"testing",component:TestingComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeentryComponent,
    NavbarComponent,
    SearchEmployeeComponent,
    TestingComponent
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
