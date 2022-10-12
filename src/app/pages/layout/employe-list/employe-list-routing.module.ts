import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './component/addemployee/addemployee.component';
import { ViewemployeeComponent } from './component/viewemployee/viewemployee.component';
import { EmployeListComponent } from './employe-list.component';

const routes: Routes = [
  { path: '', component: EmployeListComponent },
{ path: 'addemployee', component:AddemployeeComponent },
{ path: 'viewemployee', component:ViewemployeeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeListRoutingModule { }
