import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/addemp",data)
  }

  searchEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/searchemp",data)
  }

  viewEmployee=()=>{
    return this.http.get("http://localhost:8080/viewemp")
  }

  editEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/editemp",data)
  }

  deleteEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteemp",data)
  }
  empLogin=(data:any)=>{
    return this.http.post("http://localhost:8080/login",data)
  }

  applyLeave=(data:any)=>{
    return this.http.post("http://localhost:8080/addleave",data)
  }

  addSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/addsec",data)
  }

  viewSecurity=()=>{
    return this.http.get("http://localhost:8080/viewsec")
  }

  searchSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/searchsec",data)
  }

  editSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/editsec",data)
  }

  deleteSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/deletesec",data)
  }

  securityLogin=(data:any)=>{
    return this.http.post("http://localhost:8080/loginsec",data)
  }

  viewLeaveEmp=(data:any)=>{
    return this.http.post("http://localhost:8080/view",data)
  }

  viewLeaveAllEmp=()=>{
    return this.http.get("http://localhost:8080/viewall")
  }

  viewStatus=(data:any)=>{
    return this.http.post("http://localhost:8080/viewstatus",data)
  }

  addCheckin=(data:any)=>{
    return this.http.post("http://localhost:8080/checkin",data)
  }

  Checkout=(data:any)=>{
    return this.http.post("http://localhost:8080/checkout",data)
  }

  viewCheckIn=()=>{
    return this.http.get("http://localhost:8080/viewstatus")
  }

  viewallLog=()=>{
    return this.http.get("http://localhost:8080/viewlogdetails")
  }
}
