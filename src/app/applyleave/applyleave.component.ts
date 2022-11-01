import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  emp_id=localStorage.getItem("empid")
  type=""
  apply_date=""
  date=""
  duration=""
  reason=""

  readValue=()=>{
    let data={
      "emp_id":localStorage.getItem("empid"),
      "type":this.type,
      "apply_date":this.apply_date,
      "date":this.date,
      "duration":this.duration,
      "reason":this.reason
    }
    this.myapi.applyLeave(data).subscribe(
      (res)=>{
      
      }
    )
    this.type=""
    this.apply_date=""
    this.date=""
    this.duration=""
    this.reason=""
  }

  ngOnInit(): void {
  }

}
