import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileMainComponent } from '../components/profile/profile-main/profile-main.component';
import { UserService } from '../services/user.service';
import { ProfileIntroductionModule } from './profile-introduction.module';
import { ProfileProjectModule } from './profile-project.module';
import { ProfileIntroductionMainComponent } from '../components/profile-introduction/profile-introduction-main/profile-introduction-main.component';
import { ProfileProjectMainComponent } from '../components/profile-project/profile-project-main/profile-project-main.component';

const routes = [
  {
    path: '',
    component: ProfileMainComponent,
    children: [
      {
        path: 'profile-introduction',
        component: ProfileIntroductionMainComponent
      },
      {
        path: 'profile-project',
        loadChildren: () => import('./profile-project.module').then(m => m.ProfileProjectModule)
      }
    ]
  }
];

@NgModule({
  declarations: [
    ProfileMainComponent,
    ProfileIntroductionMainComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    ProfileProjectModule
  ],
  providers: [UserService]
})
export class ProfileModule { }
