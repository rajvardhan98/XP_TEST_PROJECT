import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpService : HttpService) { }

  GetAllData(){
    console.log("getting all data");
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json' 
      })
    }
    return this.httpService.getService('/GetAllData', header)
  }

  getbyId(Id:any){
    console.log("getting data");
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json' 
      })
    }
    return this.httpService.getService('/GetbyId?id='+ Id, header)
  }

  addData(reqdata:any){
    console.log(reqdata);
    let headers ={
      Headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpService.postService('/adddata',reqdata, headers)
  }

  deleteData(Id:any){
    let header={
      Headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    console.log(Id);
    return this.httpService.deleteService('/Delete?Id='+ Id, header)
  }

  updateName(Id:number, reqdata:any){
    let header={
      Headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
  }
  return this.httpService.putService('/UpdateName?Id='+ Id,reqdata , header)
}

updateSubject(Id:number, reqdata:any){
  let header={
    Headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
}
return this.httpService.postService('/UpdateSubject?Id='+ Id,reqdata , header)
}

}
