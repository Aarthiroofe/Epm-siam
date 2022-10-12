import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.scss']
})
export class ViewemployeeComponent implements OnInit {
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
      prefix: new FormControl({value:'',disabled:true}, [Validators.required]),
      first_name: new FormControl({value:'',disabled:true}, [Validators.required]),
      middle_name: new FormControl({value:'',disabled:true}, [Validators.required]),
      last_name: new FormControl({value:'',disabled:true}, [Validators.required]),
      work_mail: new FormControl({value:'',disabled:true}, [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      date_of_birth: new FormControl({value:'',disabled:true}, [Validators.required]),
      mobile_number: new FormControl({value:'',disabled:true}, [Validators.required]),
      gender: new FormControl({value:'',disabled:true}, [Validators.required]),
      blood_group: new FormControl({value:'',disabled:true}, [Validators.required]),
      Address: new FormControl({value:'',disabled:true}, [Validators.required]),
      employee_code: new FormControl({value:'',disabled:true}, [Validators.required]),
      skilled_type: new FormControl({value:'',disabled:true}, [Validators.required]),
      isd_code: new FormControl({value:'',disabled:true}, [Validators.required]),
    })
  
      this.Status = new FormGroup({
        date_of_joining: new FormControl({value:'',disabled:true}, [Validators.required]),
        confirmation_date: new FormControl({value:'',disabled:true}, [Validators.required]),
        date_of_resignation: new FormControl({value:'',disabled:true}, [Validators.required]),
        employment_type: new FormControl({value:'',disabled:true}, [Validators.required]),
        employment_status: new FormControl({value:'',disabled:true}, [Validators.required]),
      }),
      this.Position = new FormGroup({
        company: new FormControl({value:'',disabled:true}, [Validators.required]),
        department: new FormControl({value:'',disabled:true}, [Validators.required]),
        sub_department: new FormControl({value:'',disabled:true}, [Validators.required]),
        designation: new FormControl({value:'',disabled:true}, [Validators.required]),
        region: new FormControl({value:'',disabled:true}, [Validators.required]),
        level: new FormControl({value:'',disabled:true}, [Validators.required]),
        reporting_manager: new FormControl({value:'',disabled:true}, [Validators.required]),
        functional_manager: new FormControl({value:'',disabled:true}, [Validators.required]),
        branch: new FormControl({value:'',disabled:true}, [Validators.required]),
        sub_branch: new FormControl({value:'',disabled:true}, [Validators.required]),
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
  styleUrls: ['./viewemployee.component.scss']
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