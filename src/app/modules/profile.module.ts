import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileMainComponent } from '../components/profile/profile-main/profile-main.component';
import { ProfileIntroductionComponent } from '../components/profile-introduction/profile-introduction/profile-introduction.component';
import { NgOptimizedImage } from '@angular/common';
import { ProfileProjectModule } from './profile-project.module';

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
