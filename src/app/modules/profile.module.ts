import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileMainComponent } from '../components/profile/profile-main/profile-main.component';
import { UserService } from '../services/user.service';
import { ProfileIntroductionModule } from './profile-introduction.module';
import { ProfileProjectModule } from './profile-project.module';
const routes: Routes = [
  {
    path: '',
    component: ProfileMainComponent,
    children: [
      {
        path: '',
        redirectTo: 'all-projects',
        pathMatch: 'full'
      },
      {
        path: 'all-projects',
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
