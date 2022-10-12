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
  { path: 'userprofile', loadChildren: () => import('./userprofile/userprofile.module').then(m => m.UserprofileModule) },
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },

   ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
