import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-employe-detail',
  templateUrl: './employe-detail.component.html',
  styleUrls: ['./employe-detail.component.scss']
})
export class EmployeDetailComponent implements OnInit {
  myFiles:any[]=[];
  profile : FormGroup;
  Document: FormGroup;
  Status:FormGroup;
  Position : FormGroup;
  
  
  constructor(public dialog: MatDialog) { 

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
  openDialog(data:any): void {
    if(data=='rename'){
      console.log(data);
      const dialogRef = this.dialog.open(documentdialogue, {
        width: '400px',
        height:'250px',
        data: {name: data},
      });
    }
  }
  openDialog1(data:any): void {
    if(data=='replacedocument'||'addnewdocument'){
      console.log(data);
      const dialogRef = this.dialog.open(documentdialogue, {
        width: '400px',
        height:'450px',
        data: {name: data},
      });
    }
  }
}

@Component({
  selector: 'documentdialogue',
  templateUrl: 'documentdialogue.html',
  styleUrls: ['./employe-detail.component.scss']
})
export class documentdialogue implements OnInit{
  replacedocument : boolean = true;
  addnewdocument : boolean = true;
  rename : boolean = true;
  
  constructor(
    public dialogRef: MatDialogRef<Document>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  ngOnInit(): void {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}