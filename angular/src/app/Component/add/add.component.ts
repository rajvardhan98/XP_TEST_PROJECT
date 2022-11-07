import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/Service/DataService/data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  dataForm! : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private dataService : DataService) { }

  ngOnInit(): void { 
    this.dataForm = this.formBuilder.group({
      name: ['', Validators.required],
      subject: ['', Validators.required]
    });
   }
   onSubmit() {
    this.submitted = true;
    if(this.dataForm.valid){
      console.log(this.dataForm.value)
      let reqData={
        name: this.dataForm.value.name,
        subject: this.dataForm.value.subject
      }
      this.dataService.addData(reqData).subscribe((response:any)=>{
        console.log(response);
      });
    }
   }

   
}