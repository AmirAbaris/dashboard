import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('../app/modules/auth.module').then((module) => module.AuthModule)
  },
  {
    path: '',
    loadChildren: () => import('../app/modules/profile-overview-general.module').then((module) => module.ProfileOverviewGeneralModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
