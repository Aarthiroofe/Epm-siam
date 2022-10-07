import { Component, EventEmitter, Inject, OnInit,Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Output() sideNavToggled : EventEmitter<any> = new EventEmitter();
menuStatus:boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  sideNavToggle(){
  this.menuStatus = !this.menuStatus;
  this.sideNavToggled.emit(this.menuStatus)
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(Logoutdialogue, {
      width: '300px',
      height:'250px',
    });
}
}
@Component({
  selector: 'logoutdialogue',
  templateUrl: 'logoutdialogue.html',
  styleUrls: ['./header.component.scss']
})
export class Logoutdialogue implements OnInit{
  
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