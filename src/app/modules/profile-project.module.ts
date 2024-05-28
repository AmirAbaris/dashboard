import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProfileProjectMainComponent } from '../components/profile-project/profile-project-main/profile-project-main.component';
import { ProjectItemComponent } from '../components/profile-project/project-item/project-item.component';
import { AddProjectCardComponent } from '../components/profile-project/add-project-card/add-project-card.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProfileProjectMainComponent }
];

@NgModule({
  declarations: [ProfileProjectMainComponent, ProjectItemComponent, AddProjectCardComponent],
  imports: [
    MatMenuModule,
    NgOptimizedImage,
    MatIconModule,
    MatDividerModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfileProjectModule { }
