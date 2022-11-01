import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchsecurity',
  templateUrl: './searchsecurity.component.html',
  styleUrls: ['./searchsecurity.component.css']
})
export class SearchsecurityComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  input:any=""
  data={

  }
  readValue=()=>{
    if (isNaN(this.input)) {
      this.data={
        "name":this.input,
        "sec_code":0
      }
    } else {
      this.data={
        "name":this.input,
        "sec_code":this.input
      }
    }
    console.log(this.data)
    this.myapi.searchSecurity(this.data).subscribe(
      (res)=>{
        this.dataD=res
        console.log(res)
      }
    )
  }

  updateValue=()=>{
    this.myapi.editSecurity(this.dataD[0]).subscribe(
      (res)=>{
        alert("Successfully updated")
      }
    )
  }
dataD:any=[]
  ngOnInit(): void {
  }

}
