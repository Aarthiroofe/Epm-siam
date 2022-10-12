import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper, MatStepperNext } from '@angular/material/stepper';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {

  profile : FormGroup;
  Document: FormGroup;
  Status:FormGroup;
  Position : FormGroup;
  myFiles:any[]=[];
  constructor() {

    this.profile = new FormGroup({
      prefix: new FormControl({value:'',disabled:false}, [Validators.required]),
      first_name: new FormControl({value:'',disabled:false}, [Validators.required]),
      middle_name: new FormControl({value:'',disabled:false}, [Validators.required]),
      last_name: new FormControl({value:'',disabled:false}, [Validators.required]),
      work_mail: new FormControl({value:'',disabled:false}, [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      date_of_birth: new FormControl({value:'',disabled:false}, [Validators.required]),
      mobile_number: new FormControl({value:'',disabled:false}, [Validators.required]),
      gender: new FormControl({value:'',disabled:false}, [Validators.required]),
      blood_group: new FormControl({value:'',disabled:false}, [Validators.required]),
      Address: new FormControl({value:'',disabled:false}, [Validators.required]),
      employee_code: new FormControl({value:'',disabled:false}, [Validators.required]),
      skilled_type: new FormControl({value:'',disabled:false}, [Validators.required]),
      isd_code: new FormControl({value:'',disabled:false}, [Validators.required]),
      create_user: new FormControl({value:'',disabled:false}, [Validators.required]),
    })
  
      this.Status = new FormGroup({
        date_of_joining: new FormControl({value:'',disabled:false}, [Validators.required]),
        confirmation_date: new FormControl({value:'',disabled:false}, [Validators.required]),
        date_of_resignation: new FormControl({value:'',disabled:false}, [Validators.required]),
        employment_type: new FormControl({value:'',disabled:false}, [Validators.required]),
        employment_status: new FormControl({value:'',disabled:false}, [Validators.required]),
      }),
      this.Position = new FormGroup({
        company: new FormControl({value:'',disabled:false}, [Validators.required]),
        department: new FormControl({value:'',disabled:false}, [Validators.required]),
        sub_department: new FormControl({value:'',disabled:false}, [Validators.required]),
        designation: new FormControl({value:'',disabled:false}, [Validators.required]),
        region: new FormControl({value:'',disabled:false}, [Validators.required]),
        level: new FormControl({value:'',disabled:false}, [Validators.required]),
        reporting_manager: new FormControl({value:'',disabled:false}, [Validators.required]),
        functional_manager: new FormControl({value:'',disabled:false}, [Validators.required]),
        branch: new FormControl({value:'',disabled:false}, [Validators.required]),
        sub_branch: new FormControl({value:'',disabled:false}, [Validators.required]),
        grade: new FormControl({value:'',disabled:false}, [Validators.required]),
       
      }),
      
      this.Document = new FormGroup({
  
      })
     }
  

  ngOnInit(): void {
  }
  getFileDetails (e:any) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) { 
      this.myFiles.push(e.target.files[i]);
    }
    console.log(this.myFiles)
  }
  profiledata(){
    if (this.profile.valid) {
      console.log('valid');
    }else{
      console.log('not');
      
    }
  }
}
