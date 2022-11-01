import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewsecurity',
  templateUrl: './viewsecurity.component.html',
  styleUrls: ['./viewsecurity.component.css']
})
export class ViewsecurityComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.viewSecurity().subscribe(
      (res)=>{
        this.secData=res
      }
    )
    }

    secData:any=[]
  ngOnInit(): void {
  }

}
