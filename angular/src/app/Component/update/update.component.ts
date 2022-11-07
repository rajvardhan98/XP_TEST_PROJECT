import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/Service/DataService/data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  DataArray: any;
  data!: FormGroup;
  name: any;
  subject: any;
  id: any;

  constructor(private dataService: DataService) { 
  }

  ngOnInit(): void {
    this.getall();
  }
  getall(){
    this.dataService.GetAllData().subscribe((response:any)=>{
      this.DataArray=response.Data;
      console.log("Array:", this.DataArray);
    })
  }
  editData(data: any){
this.data = new FormGroup({
  name: new FormControl(data.name),
  subject: new FormControl(data.subject)
});
  }
  save(){
    let reqData = {
      id: this.id,
      name: this.name,
      subject: this.subject
    }
    this.dataService.updateName(this.id, reqData).subscribe((response: any)=>{
      console.log("Name update", response);
      this.dataService.updateSubject(this.id, reqData).subscribe((response:any)=>{
        console.log("sub update", response);
      })
    })
  }
  cancel(){
    this.data == null;
  }
}
