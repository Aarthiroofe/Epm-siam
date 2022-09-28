import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEmployeRoutingModule } from './create-employe-routing.module';
import { CreateEmployeComponent } from './create-employe.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    CreateEmployeComponent
  ],
  imports: [
    CommonModule,
    CreateEmployeRoutingModule,
    MaterialModule
  ]
})
export class CreateEmployeModule { }
