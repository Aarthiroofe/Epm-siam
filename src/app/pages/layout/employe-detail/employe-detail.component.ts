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
  savedata : boolean = false;
  canceldata:boolean = false;
  editdata:boolean = true;
  
  constructor(public dialog: MatDialog) { 

    this.profile = new FormGroup({
      firstname: new FormControl({value:'',disabled:true}, [Validators.required]),
      middlename: new FormControl({value:'',disabled:true}, [Validators.required]),
      lastname: new FormControl({value:'',disabled:true}, [Validators.required]),
      workemail: new FormControl({value:'',disabled:true}, [Validators.required]),
      dob: new FormControl({value:'',disabled:true}, [Validators.required]),
      phone: new FormControl({value:'',disabled:true}, [Validators.required]),
      gender: new FormControl({value:'',disabled:true}, [Validators.required]),
      bloodgroup: new FormControl({value:'',disabled:true}, [Validators.required]),
      Address: new FormControl({value:'',disabled:true}, [Validators.required]),
      employeeid: new FormControl({value:'',disabled:true}, [Validators.required]),
      skilltype: new FormControl({value:'',disabled:true}, [Validators.required]),
      isdcode: new FormControl({value:'',disabled:true}, [Validators.required]),
    })
    this.Status = new FormGroup({
      doj: new FormControl({value:'',disabled:true}, [Validators.required]),
      doc: new FormControl({value:'',disabled:true}, [Validators.required]),
      dor: new FormControl({value:'',disabled:true}, [Validators.required]),
      emptype: new FormControl({value:'',disabled:true}, [Validators.required]),
      empstatus: new FormControl({value:'',disabled:true}, [Validators.required]),
    }),
    this.Position = new FormGroup({
      company: new FormControl({value:'',disabled:true}, [Validators.required]),
      department: new FormControl({value:'',disabled:true}, [Validators.required]),
      subdepartment: new FormControl({value:'',disabled:true}, [Validators.required]),
      designation: new FormControl({value:'',disabled:true}, [Validators.required]),
      region: new FormControl({value:'',disabled:true}, [Validators.required]),
      level: new FormControl({value:'',disabled:true}, [Validators.required]),
      reportingmanager: new FormControl({value:'',disabled:true}, [Validators.required]),
      functionalmanager: new FormControl({value:'',disabled:true}, [Validators.required]),
      branch: new FormControl({value:'',disabled:true}, [Validators.required]),
      subbranch: new FormControl({value:'',disabled:true}, [Validators.required]),
      grade: new FormControl({value:'',disabled:true}, [Validators.required]),
     
    }),
    
    this.Document = new FormGroup({

    })
  }

  ngOnInit(): void {
  }
  edit(){
    this.savedata=true
    this.canceldata=true
    this.editdata=false
  }
  cancel(){
    this.savedata=false
    this.canceldata=false
    this.editdata=true
  }
  save(){
    this.savedata=false
    this.canceldata=false
    this.editdata=true
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