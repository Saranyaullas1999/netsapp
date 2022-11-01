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
}
