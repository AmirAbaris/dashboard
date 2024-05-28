import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileMainComponent } from '../components/profile/profile-main/profile-main.component';
import { UserService } from '../services/user.service';
import { ProfileIntroductionModule } from './profile-introduction.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileMainComponent,
    children: [
      {
        path: '', // Empty path to ensure ProfileMainComponent is always displayed
        loadChildren: () => import('./profile-project.module').then(m => m.ProfileProjectModule)
      }
    ]
  }
];


@NgModule({
  declarations: [
    ProfileMainComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    ProfileIntroductionModule
  ],
  providers: [UserService]
})
export class ProfileModule { }
