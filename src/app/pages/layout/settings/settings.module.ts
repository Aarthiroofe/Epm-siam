import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { passchange, passchangedone, SettingsComponent } from './settings.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    SettingsComponent,
    passchange,
    passchangedone
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MaterialModule
  ]
})
export class SettingsModule { }
