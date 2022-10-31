import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emppage',
  templateUrl: './emppage.component.html',
  styleUrls: ['./emppage.component.css']
})
export class EmppageComponent implements OnInit {

  constructor(private myapi:ApiService) { 
this.fetchData()
  }
  name=localStorage.getItem("name")
  emp_code=localStorage.getItem("id")

  fetchData=()=>{
    let data={
      "name":this.name,
      "emp_code":this.emp_code
    }
    this.myapi.searchEmployee(data).subscribe(
      (res)=>{
        this.empData=res
      }
    )
  }

  empData:any=[]
  ngOnInit(): void {
  }

}
