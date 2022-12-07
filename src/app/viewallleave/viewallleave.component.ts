import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallleave',
  templateUrl: './viewallleave.component.html',
  styleUrls: ['./viewallleave.component.css']
})
export class ViewallleaveComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.viewLeaveAllEmp().subscribe(
      (res)=>{
        this.dataD=res
        console.log(res)
      }
    )
  }

  approveLeave=(id:any)=>{
   let data={
    "id":id,
    "status":1
   }
   this.myapi.viewStatus(data).subscribe(
    (resp)=>{

    }
   )
   alert("approved")
   this.fetchData()
  }

  rejectLeave=(id:any)=>{
    let data={
      "id":id,
      "status":-1
    }
    this.myapi.viewStatus(data).subscribe(
      (resp)=>{

      }
    )
    alert("rejected")
    this.fetchData()
  }

  dataD:any=[]
  ngOnInit(): void {
  }

}
