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
import { TestingComponent } from './testing/testing.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { EmppageComponent } from './emppage/emppage.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { EmpNavbarComponent } from './emp-navbar/emp-navbar.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component'


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
  },
  {
    path:"viewemp",component:ViewemployeeComponent
  },
  {
    path:"emppage",component:EmppageComponent
  },
  {
    path:"employee",component:EmploginComponent
  },
  {
    path:"emp-nav",component:EmpNavbarComponent
  },
  {
    path:"applylev",component:ApplyleaveComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeentryComponent,
    NavbarComponent,
    SearchEmployeeComponent,
    TestingComponent,
    ViewemployeeComponent,
    EmppageComponent,
    EmploginComponent,
    EmpNavbarComponent,
    ApplyleaveComponent
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
