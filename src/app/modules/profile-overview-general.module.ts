import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileOverviewGeneralMainComponent } from '../components/profile-overview-general/profile-overview-general-main/profile-overview-general-main.component';
import { PlatformSettingComponent } from '../components/profile-overview-general/platform-setting/platform-setting.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProfileInformationComponent } from '../components/profile-overview-general/profile-information/profile-information.component';
import { UserService } from '../services/user.service';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ConversationComponent } from '../components/profile-overview-general/conversation/conversation.component';
import { ConversationItemComponent } from '../components/profile-overview-general/conversation-item/conversation-item.component';

const routes: Routes = [
  { path: '', redirectTo: 'profile-overview', pathMatch: 'full' },
  { path: 'profile-overview', component: ProfileOverviewGeneralMainComponent }
];


@NgModule({
  declarations: [ProfileOverviewGeneralMainComponent, PlatformSettingComponent,
    ProfileInformationComponent, ConversationItemComponent, ConversationComponent],
  imports: [
    MatSlideToggleModule,
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
    NgOptimizedImage,
    RouterModule.forChild(routes)
  ],
  providers: [UserService]
})
export class ProfileOverviewGeneralModule { }
