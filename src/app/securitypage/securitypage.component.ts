import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-securitypage',
  templateUrl: './securitypage.component.html',
  styleUrls: ['./securitypage.component.css']
})
export class SecuritypageComponent implements OnInit {

  constructor() { }
  name=localStorage.getItem("name")



  ngOnInit(): void {
  }

}
