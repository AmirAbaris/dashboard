import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('../app/modules/auth.module').then((module) => module.AuthModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../app/modules/profile.module').then((module) => module.ProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
