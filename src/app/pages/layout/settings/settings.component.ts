import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  passwordchange : FormGroup;
  showPassword: boolean = false;
  showPassword1: boolean = false;
  showPassword2: boolean = false
  passchange1:boolean = true;
  passchange2:boolean = false;
  passchange3:boolean = false;
  constructor(public dialog: MatDialog,private snackBar: MatSnackBar) {

    this.passwordchange = new FormGroup({
      Currentpassword: new FormControl({value:'',disabled:false}, [Validators.required]),
      email: new FormControl({value:'',disabled:false}, [Validators.required]),
      newpassword: new FormControl({value:'',disabled:false}, [Validators.required]),
      confirmpassword: new FormControl({value:'',disabled:false}, [Validators.required])
    });
   }
 
  ngOnInit(): void {
  }
  viewpass() {
    this.showPassword = !this.showPassword
  }
  viewpass1() {
    this.showPassword1 = !this.showPassword1
  }
  viewpass2() {
    this.showPassword2 = !this.showPassword2
  } 
  changepass2(){
    this.passchange2=false
    this.passchange3=true
  }
  
  openDialog(): void {
      const dialogRef = this.dialog.open(passchange, {
        width: '300px',
        height:'200px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        if(result==='True'){
          this.passchange2=true
          this.passchange1=false
        }else{
          this.passchange2=false
        }
      });
    
}

Opendialogue2(): void {
  if(this.passwordchange.valid){
    if(this.passwordchange.value.newpassword==this.passwordchange.value.confirmpassword){
      const dialogRef = this.dialog.open(passchangedone, {
        width: '300px',
        height:'230px',
      });
    }else{
      this.openSnackBar("your password is Mismatch")
    }
  }else{
    this.openSnackBar("Must Fill all the fields")
  }
}
openSnackBar(mes: any) {
  this.snackBar.open(mes, 'Ok',
    {
      duration: 2000
    });

}
    }
@Component({
  selector: 'passchange',
  templateUrl: 'passchange.html',
  styleUrls: ['./settings.component.scss']  
})
export class passchange{
  constructor(
    public dialogRef: MatDialogRef<passchange>,
  ) {}
  changepass(){
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


}
@Component({
  selector: 'passchangedone',
  templateUrl: 'passchangedone.html',
  styleUrls: ['./settings.component.scss']
})
export class passchangedone{
  
  constructor(
    public dialogRef: MatDialogRef<Document>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}