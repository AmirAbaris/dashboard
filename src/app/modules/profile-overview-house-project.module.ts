import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { ProfileOverviewHouseProjectMainComponent } from '../components/profile-overview-house-project/profile-overview-house-project-main/profile-overview-house-project-main.component';
import { HouseProjectItemComponent } from '../components/profile-overview-house-project/house-project-item/house-project-item.component';
import { HouseProjectComponent } from '../components/profile-overview-house-project/house-project/house-project.component';
import { NewHouseProjectComponent } from '../components/profile-overview-house-project/new-house-project/new-house-project.component';

const routes: Routes = [
  { path: '', redirectTo: 'profile-overview', pathMatch: 'full' },
  { path: 'profile-overview', component: ProfileOverviewHouseProjectMainComponent }
];

@NgModule({
  declarations: [
    ProfileOverviewHouseProjectMainComponent,
    HouseProjectItemComponent,
    NewHouseProjectComponent,
    HouseProjectComponent
  ],
  imports: [
    NgOptimizedImage,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfileOverviewHouseProjectModule { }
