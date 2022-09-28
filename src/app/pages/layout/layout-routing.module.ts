import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/services/auth.guard';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: '',
   component: LayoutComponent,
   children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
      path: 'dashboard',loadChildren: () => import('./dshboard/dshboard.module').then((m) => m.DshboardModule),
      canActivate:[AuthGuard]
  },
  { path: 'employe-list', loadChildren: () => import('./employe-list/employe-list.module').then(m => m.EmployeListModule) },
  { path: 'employe-detail', loadChildren: () => import('./employe-detail/employe-detail.module').then(m => m.EmployeDetailModule) },
  { path: 'create-employe', loadChildren: () => import('./create-employe/create-employe.module').then(m => m.CreateEmployeModule) },

   ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
