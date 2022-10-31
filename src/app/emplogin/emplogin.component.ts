import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent implements OnInit {

  constructor(private myrouter:Router,private myapi:ApiService) { }

  emp_code=""
  password=""

  readValue=()=>{
    let data={
      "emp_code":this.emp_code,
      "password":this.password
    }
    console.log(data)
    this.myapi.empLogin(data).subscribe(
      (res:any)=>{
        if (res.length>0) {
          localStorage.setItem("name",res[0].name),
          localStorage.setItem("id",res[0].emp_code)
          this.myrouter.navigate(["/emppage"])
        } else {
          alert("Invalid Credentials")
        }
      }
    )
    this.emp_code=""
    this.password=""
  }

  ngOnInit(): void {
  }

}
