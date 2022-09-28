import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-employe',
  templateUrl: './create-employe.component.html',
  styleUrls: ['./create-employe.component.scss']
})
export class CreateEmployeComponent implements OnInit {
  
  profile : FormGroup;
  Document: FormGroup;
  Status:FormGroup;
  Position : FormGroup;
  myFiles:any[]=[];

  constructor() {

  this.profile = new FormGroup({
    firstname: new FormControl({value:'',disabled:false}, [Validators.required]),
    middlename: new FormControl({value:'',disabled:false}, [Validators.required]),
    lastname: new FormControl({value:'',disabled:false}, [Validators.required]),
    workemail: new FormControl({value:'',disabled:false}, [Validators.required]),
    dob: new FormControl({value:'',disabled:false}, [Validators.required]),
    phone: new FormControl({value:'',disabled:false}, [Validators.required]),
    gender: new FormControl({value:'',disabled:false}, [Validators.required]),
    bloodgroup: new FormControl({value:'',disabled:false}, [Validators.required]),
    Address: new FormControl({value:'',disabled:false}, [Validators.required]),
    employeeid: new FormControl({value:'',disabled:false}, [Validators.required]),
    skilltype: new FormControl({value:'',disabled:false}, [Validators.required]),
    isdcode: new FormControl({value:'',disabled:false}, [Validators.required]),
  })

    this.Status = new FormGroup({
      doj: new FormControl({value:'',disabled:false}, [Validators.required]),
      doc: new FormControl({value:'',disabled:false}, [Validators.required]),
      dor: new FormControl({value:'',disabled:false}, [Validators.required]),
      emptype: new FormControl({value:'',disabled:false}, [Validators.required]),
      empstatus: new FormControl({value:'',disabled:false}, [Validators.required]),
    }),
    this.Position = new FormGroup({
      company: new FormControl({value:'',disabled:false}, [Validators.required]),
      department: new FormControl({value:'',disabled:false}, [Validators.required]),
      subdepartment: new FormControl({value:'',disabled:false}, [Validators.required]),
      designation: new FormControl({value:'',disabled:false}, [Validators.required]),
      region: new FormControl({value:'',disabled:false}, [Validators.required]),
      level: new FormControl({value:'',disabled:false}, [Validators.required]),
      reportingmanager: new FormControl({value:'',disabled:false}, [Validators.required]),
      functionalmanager: new FormControl({value:'',disabled:false}, [Validators.required]),
      branch: new FormControl({value:'',disabled:false}, [Validators.required]),
      subbranch: new FormControl({value:'',disabled:false}, [Validators.required]),
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

}
