import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Service/DataService/data.service';

@Component({
  selector: 'app-getbyid',
  templateUrl: './getbyid.component.html',
  styleUrls: ['./getbyid.component.scss']
})
export class GetbyidComponent implements OnInit {
  id:any;
  Info:any=[];

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id');
    console.log(this.id);
    this.getbyId(this.id);
  }
  getbyId(id:any){
    this.dataService.getbyId(id).subscribe((response)=>{
      if(response != null){
        this.Info = response
        console.log(this.Info);
      }
    })
  }

}
