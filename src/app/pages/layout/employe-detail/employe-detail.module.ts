import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeDetailRoutingModule } from './employe-detail-routing.module';
import { EmployeDetailComponent } from './employe-detail.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    EmployeDetailComponent
  ],
  imports: [
    CommonModule,
    EmployeDetailRoutingModule,
    MaterialModule
  ]
})
export class EmployeDetailModule { }
