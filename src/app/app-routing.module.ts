import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/modules/auth.module').then((module) => module.AuthModule)
  },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: '**', redirectTo: '/sign-in' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
