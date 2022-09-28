import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo :'login',
    pathMatch :'full',
   
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
   },
  { path: 'layout', loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutModule),
  canActivate:[AuthGuard]
 },
  { path: 'menu', loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuModule), canActivate:[AuthGuard] },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
