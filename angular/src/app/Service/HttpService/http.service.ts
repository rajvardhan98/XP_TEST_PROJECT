import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl=environment.baseurl;

  constructor(private httpclient : HttpClient) { }
  postService(url : string, reqdata : any, httpOptions : any={} ){
    
    return this.httpclient.post(this.baseUrl+url,reqdata, httpOptions)
  }     
  getService(url : string, httpOptions : any={} ){
    
    return this.httpclient.get(this.baseUrl+url, httpOptions)
  }
  putService(url : string, reqdata : any, httpOptions : any={} ){
    
    return this.httpclient.put(this.baseUrl+url,reqdata, httpOptions)
  } 

  deleteService(url: string, httpOptions: any) {
    return this.httpclient.delete(this.baseUrl + url, httpOptions)
  }
}
