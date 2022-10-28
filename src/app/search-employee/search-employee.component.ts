import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { }
name=""
emp_code=""
readValue=()=>{
  let data={
    "name":this.name,
    "emp_code":this.emp_code
  }
  console.log(data)
  this.myapi.searchEmployee(data).subscribe(
    (res)=>{
      this.dataD=res
    }
  )
  
}
dataD:any=[]
  ngOnInit(): void {
  }

}
