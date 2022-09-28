import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DshboardRoutingModule } from './dshboard-routing.module';
import { DshboardComponent } from './dshboard.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    DshboardComponent
  ],
  imports: [
    CommonModule,
    DshboardRoutingModule,
    MaterialModule  
  ]
})
export class DshboardModule { }
