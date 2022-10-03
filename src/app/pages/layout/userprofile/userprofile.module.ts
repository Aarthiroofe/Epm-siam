import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserprofileRoutingModule } from './userprofile-routing.module';
import { documentdialogue, UserprofileComponent } from './userprofile.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    UserprofileComponent,
    documentdialogue
  ],
  imports: [
    CommonModule,
    UserprofileRoutingModule,
    MaterialModule
  ]
})
export class UserprofileModule { }
