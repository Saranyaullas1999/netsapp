import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addsecurity',
  templateUrl: './addsecurity.component.html',
  styleUrls: ['./addsecurity.component.css']
})
export class AddsecurityComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  name=""
  sec_code=""
  password=""
  place=""
  phone=""
  doj=""

  readValue=()=>{
    let data={
      "name":this.name,
      "sec_code":this.sec_code,
      "password":this.password,
      "place":this.place,
      "phone":this.phone,
      "doj":this.doj
    }
    this.myapi.addSecurity(data).subscribe(
      (res)=>{
        alert("Successfully added")
      }
    )
    this.name=""
    this.sec_code=""
    this.password=""
    this.place=""
    this.phone=""
    this.doj=""
  }

  ngOnInit(): void {
  }

}
