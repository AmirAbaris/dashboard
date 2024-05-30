import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ProfileModel } from '../models/profile.model';
import { TranslateService } from '@ngx-translate/core';
import { AccountProfileCaptionModel } from './caption-models/account-profile.caption.model';

@Component({
  selector: 'app-account-profile-main',
  templateUrl: './account-profile-main.component.html',
  styleUrl: './account-profile-main.component.scss'
})
export class AccountProfileMainComponent implements OnInit {
  //#region Properties
  private readonly _userService = inject(UserService);
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
    this._userService.getProfile().subscribe({
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
