import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Output() sideNavToggled : EventEmitter<any> = new EventEmitter();
menuStatus:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  sideNavToggle(){
  this.menuStatus = !this.menuStatus;
  this.sideNavToggled.emit(this.menuStatus)
  }
}
