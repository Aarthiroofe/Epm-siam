import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeComponent } from './create-employe.component';

const routes: Routes = [{ path: '', component: CreateEmployeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateEmployeRoutingModule { }
