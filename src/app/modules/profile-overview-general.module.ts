import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileOverviewGeneralMainComponent } from '../components/profile-overview-general/profile-overview-general-main/profile-overview-general-main.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppRepository } from '../repositories/app-repository';
import { AppService } from '../services/app.service';
import { ProfileOverviewConversationItemComponent } from '../components/profile-overview-general/profile-overview-conversation-item/profile-overview-conversation-item.component';
import { ProfileOverviewConversationComponent } from '../components/profile-overview-general/profile-overview-conversation/profile-overview-conversation.component';
import { ProfileOverviewPlatformSettingComponent } from '../components/profile-overview-general/profile-overview-platform-setting/profile-overview-platform-setting.component';
import { ProfileOverviewProfileInformationComponent } from '../components/profile-overview-general/profile-overview-profile-information/profile-overview-profile-information.component';
import { HouseProjectItemComponent } from '../components/profile-overview-general/house-project-item/house-project-item.component';
import { MatButtonModule } from '@angular/material/button';
import { ProfileOverviewHouseProjectComponent } from '../components/profile-overview-general/profile-overview-house-project/profile-overview-house-project.component';
import { NewHouseProjectComponent } from '../components/profile-overview-general/new-house-project/new-house-project.component';

const routes: Routes = [
  {
    path: '', component: ProfileOverviewGeneralMainComponent
  }
];

@NgModule({
  declarations: [
    ProfileOverviewGeneralMainComponent, ProfileOverviewPlatformSettingComponent,
    ProfileOverviewProfileInformationComponent, ProfileOverviewConversationItemComponent,
    ProfileOverviewConversationComponent, ProfileOverviewHouseProjectComponent, HouseProjectItemComponent,
    NewHouseProjectComponent
  ],
  imports: [
    MatSlideToggleModule,
    CommonModule,
    MatDividerModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    NgOptimizedImage,
    RouterModule.forChild(routes)
  ],
  providers: [AppService, AppRepository]
})
export class ProfileOverviewGeneralModule { }
