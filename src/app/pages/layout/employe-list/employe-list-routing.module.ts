import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeListComponent } from './employe-list.component';

const routes: Routes = [{ path: '', component: EmployeListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeListRoutingModule { }
