import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewemployeeleave',
  templateUrl: './viewemployeeleave.component.html',
  styleUrls: ['./viewemployeeleave.component.css']
})
export class ViewemployeeleaveComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  
  emp_id=localStorage.getItem("id")
  status:boolean=false
  fetchData=()=>{
    let data={
      "emp_id":localStorage.getItem("id")
    }
    console.log(data)
    this.myapi.viewLeaveEmp(data).subscribe(
      (res)=>{
        this.dataD=res
        this.status=true
      }
    )
  }
dataD:any=[]
  ngOnInit(): void {
  }

}
