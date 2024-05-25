import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileMainComponent } from '../components/profile/profile-main/profile-main.component';
import { ProfileOverviewComponent } from '../components/profile/profile-overview/profile-overview.component';
import { ProjectItemComponent } from '../components/profile/project-item/project-item.component';
import { ProjectComponent } from '../components/profile/project/project.component';

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileMainComponent }
];

@NgModule({
  declarations: [
    ProfileMainComponent,
    ProjectItemComponent,
    ProjectComponent,
    ProfileOverviewComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterModule.forChild(routes)
  ]
})
export class ProfileModule { }
