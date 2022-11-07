import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/Service/DataService/data.service';



@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.scss']
})

export class GetallComponent implements OnInit {
  DataArray: any;
  Id:any;
  data!: FormGroup;

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.getall();
  }
  getall(){
    this.dataservice.GetAllData().subscribe((response:any)=>{
      this.DataArray=response.Data;
      console.log("Array:", this.DataArray);
    })
  }

  onDelete(id:any){
  
    console.log(id)
    this.dataservice.deleteData(id).subscribe((response:any)=>{
      console.log("Data deleted",response);
      this.getall();
    })
  }

  get(id:any){
    localStorage.setItem('id', id)
  }


}
