import { Component, Input, OnChanges } from '@angular/core';
import { ICON_REGISTRY_PROVIDER } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnChanges {
@Input() sidenavactive : boolean = false;

    constructor() { }

  ngOnChanges(): void {
    // this.sidenavactive = false
    console.log(this.sidenavactive);
    
  }

}
