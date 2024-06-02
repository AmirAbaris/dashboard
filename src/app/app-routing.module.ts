import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/two-factor-auth.module').then((module) => module.TwoFactorAuthModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('../app/modules/auth.module').then((module) => module.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
