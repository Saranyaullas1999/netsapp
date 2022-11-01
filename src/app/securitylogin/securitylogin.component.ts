import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-securitylogin',
  templateUrl: './securitylogin.component.html',
  styleUrls: ['./securitylogin.component.css']
})
export class SecurityloginComponent implements OnInit {

  constructor(private myrouter:Router,private myapi:ApiService) { }
  sec_code=""
  password=""

  readValue=()=>{
    let data={
      "sec_code":this.sec_code,
      "password":this.password
    }
    console.log(data)
    this.myapi.securityLogin(data).subscribe(
      (res:any)=>{
        if (res.length>0) {
          localStorage.setItem("name",res[0].name),
          localStorage.setItem("id",res[0].id),
          localStorage.setItem("sec_code",res[0].sec_code)
          this.myrouter.navigate(["/secpage"])
        } else {
          alert("Invalid Credentials")
        }
      }
    )
    this.sec_code=""
    this.password=""
  }

  ngOnInit(): void {
  }

}
