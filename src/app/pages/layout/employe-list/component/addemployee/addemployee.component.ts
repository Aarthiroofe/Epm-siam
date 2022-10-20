import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper, MatStepperNext } from '@angular/material/stepper';
import { ApiService } from 'src/app/api.service';
import { NotificationService } from 'src/app/shared/notification.service';

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
  stepindex = 0
  constructor(private service:ApiService,private notificationService:NotificationService) {

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
      // Address: new FormControl({value:'',disabled:false}, [Validators.required]),
      employee_code: new FormControl({value:'',disabled:false}, [Validators.required]),
      skilled_type: new FormControl({value:'',disabled:false}, [Validators.required]),
      isd_code: new FormControl({value:'',disabled:false}, [Validators.required]),
      create_user: new FormControl({value:'',disabled:false}, [Validators.required]),
       nationality: new FormControl({value:'',disabled:false}, [Validators.required]),
    })
  
      this.Status = new FormGroup({
        date_of_joining: new FormControl({value:'',disabled:false}, [Validators.required]),
        confirmation_date: new FormControl({value:'',disabled:false}, [Validators.required]),
        date_of_resignation: new FormControl({value:'',disabled:false}, [Validators.required]),
        employment_type: new FormControl({value:'',disabled:false}, [Validators.required]),
        employment_status: new FormControl({value:'',disabled:false}, [Validators.required]),
        relieving_date: new FormControl({value:'',disabled:false}, [Validators.required]),
        employee_id: new FormControl({value:'',disabled:false}, [Validators.required]),
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
        business_unit: new FormControl({value:'',disabled:false}, [Validators.required]),
        employee_id: new FormControl({value:'',disabled:false}, [Validators.required]),
      }),
      
      this.Document = new FormGroup({
        adhar:  new FormControl({value:'',disabled:false}),
      })
     }
  

  ngOnInit(): void {
    this.Status.patchValue({ employee_id:localStorage.getItem('empid') })
    this.Position.patchValue({ employee_id:localStorage.getItem('empid') })
  }
  getFileDetails (e:any) {
    for (var i = 0; i < e.target.files.length; i++) { 
      this.myFiles.push(e.target.files[i]);
    }
    console.log(this.myFiles)
  }
  profiledata(){
    if (this.profile.valid) {
      this.stepindex = 1  
      this.service.profile(this.profile.value)
      .subscribe((next) => {
        console.log(next);
        if (next.success == true) {
          this.notificationService.showSuccess(next.message, "");
           localStorage.setItem('empid',next.data.employee_id)   
        }
        else {
          this.notificationService.showError(next.message, "")
          console.log(next.message);
        }
      }, 
      (error) => {
            this.notificationService.showError(error.error.message, "") 
          }
      );
      console.log(this.profile);
    }else{
   this.profile.markAllAsTouched()
    }
  }
  statusdata(){
    if(this.Status.valid){
      this.stepindex = 2 
       this.service.status(this.Status.value)
       .subscribe((next)=>{
        if (next.success==true) {
          this.notificationService.showSuccess(next.message, "");
        }else{
          this.notificationService.showError(next.message, "")
        }
       }, (error) => {
        this.notificationService.showError(error.error.message, "") 
      })
    }else{
      this.Status.markAllAsTouched()
    }
  }
  positiondata(){
    if(this.Position.valid){
      console.log('stscheck');
      this.stepindex = 3  
      this.service.position(this.Position.value) .subscribe ((next)=>{
        if (next.success==true) {
          this.notificationService.showSuccess(next.message, "");
        }else{
          this.notificationService.showError(next.message, "")
        }},(error) => {
          this.notificationService.showError(error.error.message, "") 
        })
    }else{
      this.Position.markAllAsTouched()
    }
  }

  docupload(event:any){
    // let fileList: FileList = event.target.files;
    // if(fileList.length > 0) {
    //   const file:any = fileList[0];
    //   console.log(file);
    // let reader = new FileReader();
    // reader.onload = () =>{
    // }
    // reader.readAsDataURL(file)
    // }
    
  }
}
