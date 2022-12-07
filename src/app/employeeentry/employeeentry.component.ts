import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employeeentry',
  templateUrl: './employeeentry.component.html',
  styleUrls: ['./employeeentry.component.css']
})
export class EmployeeentryComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  name=""
  emp_code=""
  designation=""
  join_date=""
 place=""
 phoneno=""
   email=""
password=""

readValue=()=>{
  let data={
    "name" : this.name,
    "emp_code":this.emp_code,
    "designation":this.designation,
    "join_date":this.join_date,
    "place":this.place,
    "phoneno":this.phoneno,
    "email":this.email,
    "password":this.password
  }
  console.log(data)
  this.myapi.addEmployee(data).subscribe(
    (res)=>{
      alert("Successfully added")
    }
  )
  this.name=""
  this.emp_code=""
  this.designation=""
  this.join_date=""
  this.place=""
  this.phoneno=""
  this.email=""
  this.password=""
}

  ngOnInit(): void {
  }

}
