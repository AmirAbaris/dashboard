import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PlatformSettingCaptionModel } from '../models/caption-models/platform-setting.caption.model';
import { UserService } from '../../../services/user.service';
import { ProfileModel } from '../models/profile.model';
import { forkJoin } from 'rxjs';
import { ProfileInformationCaptionModel } from '../models/caption-models/profile-information.caption.model';

@Component({
  selector: 'app-profile-overview-general-main',
  templateUrl: './profile-overview-general-main.component.html',
  styleUrl: './profile-overview-general-main.component.scss'
})
export class ProfileOverviewGeneralMainComponent implements OnInit {
  //#region Properties
  private readonly _translateService = inject(TranslateService);
  private readonly _userService = inject(UserService);

  public profileInfo: ProfileModel | undefined;
  public platformSettingCaption: PlatformSettingCaptionModel | undefined;
  public profileInfoCaption: ProfileInformationCaptionModel | undefined;
  private readonly _captionPath = {
    platformSettingCaption: 'profile-overview-general.platform-setting',
    profileInfoCaption: 'profile-overview-general.profile-information'
  }
  //#endregion

  //#region Lifecycle methods
  public ngOnInit(): void {
    this._getCaption();
    this._getData();
  }
  //#endregion

  //#region Main logic methods
  private _getCaption(): void {
    const platformSettingCaption = this._translateService.get(this._captionPath.platformSettingCaption);
    const profileInfoCaption = this._translateService.get(this._captionPath.profileInfoCaption);

    forkJoin([platformSettingCaption, profileInfoCaption]).subscribe(([platformSettingCaptionData, profileInfoCaptionData]) => {
      this.platformSettingCaption = platformSettingCaptionData;
      this.profileInfoCaption = profileInfoCaptionData;
    })

    this._translateService.get(this._captionPath.platformSettingCaption).subscribe((caption) => {
      this.platformSettingCaption = caption;
    });
  }

  private _getData(): void {
    this._userService.getProfile().subscribe((data) => {
      this.profileInfo = data;
    });
  }
  //#endregion
}
