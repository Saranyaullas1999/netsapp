import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewlog-employee',
  templateUrl: './viewlog-employee.component.html',
  styleUrls: ['./viewlog-employee.component.css']
})
export class ViewlogEmployeeComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

emp_id=localStorage.getItem("id")

fetchData=()=>{
  let data={
    "emp_id":localStorage.getItem("id")
  }
  this.myapi.viewLogById(data).subscribe(
    (resp)=>{
      this.dataD=resp
    }
  )
}

dataD:any=[]

  ngOnInit(): void {
  }

}
