import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpClientJsonpModule} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ShowLeadServiceService {

  constructor(private _http:HttpClient) { }

  GetCountry()
  {
    return this._http.get("http://ztp.hashtaglabs.in/angapi/master-data.php?api_key=1234&action=scountry");
  }



  GetStates(formJson:any)
  {
    //let data:any= """country_id" : "1";""
    //return this._http.post("https://ztp.hashtaglabs.in/api/master-data.php?api_key=1234&action=sstate",
    //JSON.stringify);

    return this._http.post('http://ztp.hashtaglabs.in/angapi/master-data.php?api_key=1234&action=sstate',formJson);
  }


  

}
