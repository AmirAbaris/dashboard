import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileMainComponent } from '../components/profile/profile-main/profile-main.component';
import { NgOptimizedImage } from '@angular/common';
import { ProfileIntroductionComponent } from '../components/profile/profile-introduction/profile-introduction.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileMainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./profile-project.module').then(m => m.ProfileProjectModule)
      }
    ]
  }
];

@NgModule({
  declarations: [
    ProfileMainComponent,
    ProfileIntroductionComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    NgOptimizedImage
  ]
})
export class ProfileModule { }
