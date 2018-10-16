import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComprehendService {
  
  // httpOptions : any    = {
  //   headers: new HttpHeaders({
  //     //'Content-Type':  'application/json',
  //     'Access-Control-Allow-Headers': 'Content-Type',
  //     'Access-Control-Allow-Methods': 'GET',
  //    // 'Access-Control-Allow-Origin': '*'
  //   })
  // };
  API_URL='https://k9ikv24a45.execute-api.us-west-2.amazonaws.com/dev/orgemp';
  constructor(private httpClient:HttpClient){};

  getComprehend(myparam){
    //let AWS:Comprehend
    //return new AWS.Comprehend(this.opts);
    return this.httpClient.post(this.API_URL,myparam);
  }

}
