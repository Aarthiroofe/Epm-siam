import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DshboardRoutingModule } from './dshboard-routing.module';
import { DshboardComponent } from './dshboard.component';
import { MaterialModule } from 'src/app/material/material.module';
import { InfantattritionComponent } from './charts/infantattrition/infantattrition.component';
import { YearofjoiningComponent } from './charts/yearofjoining/yearofjoining.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { YearofrelievingComponent } from './charts/yearofrelieving/yearofrelieving.component';
import { GenderratioComponent } from './charts/genderratio/genderratio.component';
import { ActiveemployeeComponent } from './charts/activeemployee/activeemployee.component';
import { EmployeemovementComponent } from './charts/employeemovement/employeemovement.component';
import { ESrComponent } from './charts/esr/esr.component';
import { EScComponent } from './charts/esc/esc.component';
import { ESpComponent } from './charts/esp/esp.component';

@NgModule({
  declarations: [
    DshboardComponent,
    InfantattritionComponent,
    YearofjoiningComponent,
    YearofrelievingComponent,
    GenderratioComponent,
    ActiveemployeeComponent,
    EmployeemovementComponent,
    ESrComponent,
    EScComponent,
    ESpComponent
  ],
  imports: [
    CommonModule,
    DshboardRoutingModule,
    MaterialModule,
    NgApexchartsModule
    ]
})
export class DshboardModule { }
