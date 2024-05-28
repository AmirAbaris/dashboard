import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileOverviewGeneralMainComponent } from '../components/profile-overview-general/profile-overview-general-main/profile-overview-general-main.component';
import { PlatformSettingComponent } from '../components/profile-overview-general/platform-setting/platform-setting.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: 'profile-overview', pathMatch: 'full' },
  { path: 'profile-overview', component: ProfileOverviewGeneralMainComponent }
];


@NgModule({
  declarations: [ProfileOverviewGeneralMainComponent, PlatformSettingComponent],
  imports: [
    MatSlideToggleModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ProfileOverviewGeneralModule { }
