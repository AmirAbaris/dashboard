import { Component, OnInit, inject } from '@angular/core';
import { ProfileModel } from '../models/profile.model';
import { TranslateService } from '@ngx-translate/core';
import { AccountProfileCaptionModel } from '../models/caption-models/account-profile.caption.model';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrl: './account-profile.component.scss'
})
export class AccountProfileComponent implements OnInit {
  //#region Properties
  private readonly _appService = inject(AppService);
  private readonly _translateService = inject(TranslateService);

  public profileData: ProfileModel | undefined;
  public profileCaption: AccountProfileCaptionModel | undefined;
  private readonly _captionPath = {
    accountMainCaption: 'account-profile.account-profile-main'
  }
  //#endregion

  //#region Lifecycle methods
  public ngOnInit(): void {
    this._getProfile();
    this._getCaption();
  }
  //#endregion

  //#region Main logic methods
  private _getProfile(): void {
    this._appService.getProfileItem().subscribe({
      next: (data) => {
        this.profileData = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  private _getCaption(): void {
    this._translateService.get(this._captionPath.accountMainCaption).subscribe((caption) => {
      this.profileCaption = caption;
    });
  }
  //#endregion
}
