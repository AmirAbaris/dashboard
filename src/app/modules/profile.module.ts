import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileMainComponent } from '../components/profile/profile-main/profile-main.component';
import { ProfileOverviewComponent } from '../components/profile/profile-overview/profile-overview.component';
import { ProjectItemComponent } from '../components/profile/project-item/project-item.component';
import { ProjectComponent } from '../components/profile/project/project.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { ParticipantCountPipe } from '../components/profile/pipes/participant-count.pipe';
import { UserService } from '../services/user.service';

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileMainComponent }
];

@NgModule({
  declarations: [
    ProfileMainComponent,
    ProjectItemComponent,
    ProjectComponent,
    ProfileOverviewComponent,
    ParticipantCountPipe
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
