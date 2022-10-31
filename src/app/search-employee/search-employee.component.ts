import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  inputValue:any=""
data={}
readValue=()=>{
  if (isNaN(this.inputValue)) {
    this.data={
      "name" : this.inputValue,
      "emp_code":0
    }
  } else {
   this.data={
    "name" : this.inputValue,
    "emp_code":this.inputValue
   } 
  }

  console.log(this.data)
  this.myapi.searchEmployee(this.data).subscribe(
    (res)=>{
      this.dataD=res
      console.log(res)
    }
  )
  
}
dataD:any=[]
  ngOnInit(): void {
  }

}
