import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor() { }

  result=5

  addTwoNumber=(a:any,b:any)=>{
    return a+b
  }

  

  ngOnInit(): void {
  }

}
