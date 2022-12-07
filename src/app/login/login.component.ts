import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myrouter:Router) { }
  name=""
  password=""
  readValue=()=>{

    let data={
      "name":this.name,
      "password":this.password
    }
    
    if (this.name=="admin" && this.password=="admin123") {
      this.myrouter.navigate(["empentry"])
      
    } else {
      console.log("Invalid Credentials")
    }
    console.log(data)
    this.name=""
    this.password=""
  }

  ngOnInit(): void {
  }

}
