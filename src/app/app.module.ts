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
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { AddsecurityComponent } from './addsecurity/addsecurity.component';
import { ViewsecurityComponent } from './viewsecurity/viewsecurity.component';
import { SearchsecurityComponent } from './searchsecurity/searchsecurity.component';
import { SecurityloginComponent } from './securitylogin/securitylogin.component';
import { SecuritypageComponent } from './securitypage/securitypage.component';
import { ViewemployeeleaveComponent } from './viewemployeeleave/viewemployeeleave.component';
import { ViewallleaveComponent } from './viewallleave/viewallleave.component';
import { SecuritynavbarComponent } from './securitynavbar/securitynavbar.component';
import { CheckinComponent } from './checkin/checkin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ViewalllogComponent } from './viewalllog/viewalllog.component';
import { ViewlogEmployeeComponent } from './viewlog-employee/viewlog-employee.component'


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
  },
  {
    path:"addsec",component:AddsecurityComponent
},
{
  path:"viewsec",component:ViewsecurityComponent
},
{
  path:"searchsec",component:SearchsecurityComponent
},
{
  path:"security",component:SecurityloginComponent
},
{
  path:"secpage",component:SecuritypageComponent
},
{
  path:"viewleaveemp",component:ViewemployeeleaveComponent
},
{
  path:"viewallleave",component:ViewallleaveComponent
},
{
  path:"sec-nav",component:SecuritynavbarComponent
},
{
  path:"checkin",component:CheckinComponent
},
{
  path:"checkout",component:CheckoutComponent
},
{
  path:"viewalllog",component:ViewalllogComponent
},
{
  path:"viewlogbyid",component:ViewlogEmployeeComponent
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
    ApplyleaveComponent,
    AddsecurityComponent,
    ViewsecurityComponent,
    SearchsecurityComponent,
    SecurityloginComponent,
    SecuritypageComponent,
    ViewemployeeleaveComponent,
    ViewallleaveComponent,
    SecuritynavbarComponent,
    CheckinComponent,
    CheckoutComponent,
    ViewalllogComponent,
    ViewlogEmployeeComponent
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
