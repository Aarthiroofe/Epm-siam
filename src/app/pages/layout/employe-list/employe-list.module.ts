import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeListRoutingModule } from './employe-list-routing.module';
import { Deletedialogue, EmployeListComponent } from './employe-list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { AddemployeeComponent } from './component/addemployee/addemployee.component';
import { documentdialogue, ViewemployeeComponent } from './component/viewemployee/viewemployee.component';

@NgModule({
  declarations: [
    EmployeListComponent,
    Deletedialogue,
    AddemployeeComponent,
    ViewemployeeComponent,
    documentdialogue

  ],
  imports: [
    CommonModule,
    EmployeListRoutingModule,
    MaterialModule
  ]
})
export class EmployeListModule { }
