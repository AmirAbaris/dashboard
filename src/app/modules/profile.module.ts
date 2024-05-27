import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileMainComponent } from '../components/profile/profile-main/profile-main.component';
import { ProjectItemComponent } from '../components/profile/project-item/project-item.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { ParticipantCountPipe } from '../components/profile/pipes/participant-count.pipe';
import { UserService } from '../services/user.service';
import { ProfileIntroductionComponent } from '../components/profile/profile-introduction/profile-introduction.component';
import { ProfileProjectComponent } from '../components/profile/profile-project/profile-project.component';
import { AddProjectCardComponent } from '../components/profile/add-project-card/add-project-card.component';
import { IsParticipantRegisteredPipe } from '../components/profile/pipes/is-participant-registered.pipe';

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileMainComponent }
];

@NgModule({
  declarations: [
    ProfileMainComponent,
    ProjectItemComponent,
    ProfileProjectComponent,
    ProfileIntroductionComponent,
    AddProjectCardComponent,
    ParticipantCountPipe,
    IsParticipantRegisteredPipe
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    RouterModule.forChild(routes)
  ],
  providers: [UserService]
})
export class ProfileModule { }
