import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = new FormControl();


  functionalert()
  {
  alert("hello");
  }
  
  

  constructor() { }

  ngOnInit() {
  }

}
