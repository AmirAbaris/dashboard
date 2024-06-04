import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileMainComponent } from '../components/profile/profile-main/profile-main.component';
import { NgOptimizedImage } from '@angular/common';
import { ProfileIntroductionComponent } from '../components/profile/profile-introduction/profile-introduction.component';
import { UserService } from '../services/user.service';
import { UserRepository } from '../repositories/user.repository';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ProfileMainComponent,
    children: [
      {
        path: 'all-projects',
        loadChildren: () => import('./profile-project.module').then(m => m.ProfileProjectModule)
      },
      {
        path: 'overview',
        loadChildren: () => import('./profile-overview-general.module').then(m => m.ProfileOverviewGeneralModule)
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
  ],
  providers: [UserService, UserRepository]
})
export class ProfileModule { }
