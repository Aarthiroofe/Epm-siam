import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeListRoutingModule } from './employe-list-routing.module';
import { Deletedialogue, EmployeListComponent } from './employe-list.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    EmployeListComponent,
    Deletedialogue
  ],
  imports: [
    CommonModule,
    EmployeListRoutingModule,
    MaterialModule
  ]
})
export class EmployeListModule { }
