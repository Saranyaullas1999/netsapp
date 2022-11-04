import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewalllog',
  templateUrl: './viewalllog.component.html',
  styleUrls: ['./viewalllog.component.css']
})
export class ViewalllogComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

  fetchData=()=>{
    this.myapi.viewallLog().subscribe(
      (resp)=>{
        this.dataD=resp
      }
    )
  }

  dataD:any=[]

  ngOnInit(): void {
  }

}
