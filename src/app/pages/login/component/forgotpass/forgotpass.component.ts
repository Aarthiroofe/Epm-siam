import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.scss']
})
export class ForgotpassComponent implements OnInit {

  submitted: boolean = true;
  loginpage: boolean = true;
  forgot: boolean = true;
  newpasswordpage: boolean = false;
  updatesuccesfully: boolean = false;
  forgotpassword: FormGroup;
  createpassword: FormGroup;
  showPassword: boolean = false;
  showPassword1: boolean = false;
  constructor(private snackBar: MatSnackBar) {

    this.forgotpassword = new FormGroup({
      reqemail: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.pattern('^[a-za-z0-9.+-]+@[a-za-z0-9-]+.[a-za-z0-9-.]+$')]),
    });

    this.createpassword = new FormGroup({
      newpassword: new FormControl({ value: '', disabled: false }, [Validators.required]),
      confirmpassword: new FormControl({ value: '', disabled: false }, [Validators.required]),
    })
  }

  ngOnInit(): void {
  }
  viewpass() {
    this.showPassword = !this.showPassword
  }
  viewpass1() {
    this.showPassword1 = !this.showPassword1
  }
  emailrequest() {
    if (this.forgotpassword.valid) {
      this.newpasswordpage = true;
      this.forgot = false;
    }
    else
      this.forgotpassword.markAllAsTouched();
  }

  passwordupdate() {
    if (this.createpassword.valid) {
      if (this.createpassword.value.newpassword == this.createpassword.value.confirmpassword) {
        this.updatesuccesfully = true;
        this.newpasswordpage = false;
      }
      else {
        this.openSnackBar("your password is Mismatch")
      }
    }
    else
      this.createpassword.markAllAsTouched();

  }
  backtologin() {
    this.loginpage = true
    this.updatesuccesfully = false;
  }
  openSnackBar(mes: any) {
    this.snackBar.open(mes, 'Ok',
      {
        duration: 2000
      });

  }
}
