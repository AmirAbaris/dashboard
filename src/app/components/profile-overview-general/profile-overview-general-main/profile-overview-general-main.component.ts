import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PlatformSettingCaptionModel } from '../models/caption-models/platform-setting.caption.model';

@Component({
  selector: 'app-profile-overview-general-main',
  templateUrl: './profile-overview-general-main.component.html',
  styleUrl: './profile-overview-general-main.component.scss'
})
export class ProfileOverviewGeneralMainComponent implements OnInit {
  //#region Properties
  private readonly _translateService = inject(TranslateService);

  public platformSettingCaption: PlatformSettingCaptionModel | undefined;
  private readonly _captionPath = {
    platformSettingCaption: 'profile-overview-general.platform-setting'
  }
  //#endregion

  //#region Lifecycle methods
  public ngOnInit(): void {
    this._getCaption();
  }
  //#endregion

  //#region Main logic methods
  private _getCaption(): void {
    this._translateService.get(this._captionPath.platformSettingCaption).subscribe((caption) => {
      this.platformSettingCaption = caption;
    });
  }
  //#endregion
}
