import { Component, input } from '@angular/core';
import { ProfileOverviewPlatformSettingCaptionModel } from '../models/caption-models/profile-overview-platform-setting.caption.model';

@Component({
  selector: 'app-profile-overview-platform-setting',
  templateUrl: './profile-overview-platform-setting.component.html',
  styleUrl: './profile-overview-platform-setting.component.scss'
})
export class ProfileOverviewPlatformSettingComponent {
  //#region Properties
  public caption = input.required<ProfileOverviewPlatformSettingCaptionModel>();
  //#endregion
}
