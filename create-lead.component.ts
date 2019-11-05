import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-lead',
  templateUrl: './create-lead.component.html',
  styleUrls: ['./create-lead.component.css']
})
export class CreateLeadComponent implements OnInit {



  name:string="shivam Sharma";
  age:number=22;
  pi:number=3.141212122;
  title="my first dropDown";
  weeks = ["Sunday","Monday","Tuesday","Wednesday","Friday","Saturday"];
  months = ["January", "Feburary", "March", "April", "May", 
  "June", "July", "August", "September",
  "October", "November", "December",];


  constructor() { }

  ngOnInit() {
  }

}
