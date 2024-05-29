import { NgModule } from '@angular/core';
import { ProfileOverviewProjectMainComponent } from '../components/profile-overview-project/profile-overview-project-main/profile-overview-project-main.component';
import { NewProjectComponent } from '../components/profile-overview-project/new-project/new-project.component';
import { ProjectItemComponent } from '../components/profile-overview-project/project-item/project-item.component';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from '../components/profile-overview-project/project/project.component';
import { UserService } from '../services/user.service';
import { NgOptimizedImage } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: 'profile-overview', pathMatch: 'full' },
  { path: 'profile-overview', component: ProfileOverviewProjectMainComponent }
];

@NgModule({
  declarations: [
    ProfileOverviewProjectMainComponent,
    ProjectItemComponent,
    NewProjectComponent,
    ProjectComponent
  ],
  imports: [
    NgOptimizedImage,
    RouterModule.forChild(routes)
  ],
  providers: [UserService]
})
export class ProfileOverviewProjectModule { }
