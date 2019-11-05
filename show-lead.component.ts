import { Component, OnInit } from '@angular/core';
import { ShowLeadServiceService } from './show-lead-service.service';
import { FormGroup, FormControl,} from '@angular/forms';


@Component({
  selector: 'app-show-lead',
  templateUrl: './show-lead.component.html',
  styleUrls: ['./show-lead.component.css'],
  providers: [ShowLeadServiceService]
})
export class ShowLeadComponent implements OnInit {
  
  createAccountForm: FormGroup;
  countries: {};
  cont:{};
  states: {};
  data:any;
  isavailable = 1;
  countryvallue:any={
    "country_id" : "1"
   };
  stringifiedData:any;  
 
  
  logevent(agr: any) {
    alert("hello");
  }

  constructor(private _swl: ShowLeadServiceService) { }

  ngOnInit() {
    
    // this.stringifiedData = JSON.stringify(this.countryvallue);

    //     this._swl.GetCountry().subscribe(da=> 
    // {    
    //     this.countries= da,
    //     this.cont= da,
        
    //     console.log(this.countries);
    //     //console.log("web Api call succesfull");
    // },
    //   err => {
    //     console.log(err);
    //   }
    // )
    this._swl.GetCountry().subscribe((data:any)=>{
      this.countries = data.res_data;
    });

    
    
    


     this._swl.GetStates(this.countryvallue.value).subscribe(data=> 
       {    
              this.states=data,
              console.log(this.countryvallue.value);
          
       },
         err => { 
          console.log(err);
        }
      )
  

      this.createAccountForm=new FormGroup({
      countries: new FormControl(""),
      states: new FormControl(""),
    

    });
    
  }
  onChangeCountry(country_id:Number)
    {
     
      alert(country_id);
      //alert( this.stringifiedData);
      this._swl.GetStates({'country_id':country_id}).subscribe((data:any)=>{
        this.states = data.res_data;
        console.log(data.res_data);
      });
     
    
    }
    
    


}
