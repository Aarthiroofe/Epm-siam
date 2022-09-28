import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  sideNavStatus: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  receiveCollapsed($event: boolean) {
    this.sideNavStatus = $event;
    console.log(this.sideNavStatus);
    
}
}
