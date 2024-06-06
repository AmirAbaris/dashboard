import { Component, OnInit, inject, output } from '@angular/core';
import { ProfileModel } from '../../account-setting/models/profile.model';
import { TranslateService } from '@ngx-translate/core';
import { AccountProfileCaptionModel } from '../../account-setting/models/caption-models/account-profile.caption.model';
import { UserService } from '../../../services/user.service';
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-account-profile-main',
  templateUrl: './account-profile-main.component.html',
  styleUrl: './account-profile-main.component.scss'
})
export class AccountProfileMainComponent implements OnInit {
  //#region Properties
  private readonly _userService = inject(UserService);
  private readonly _translateService = inject(TranslateService);

  public clickToggleSliderEvent = output<boolean>();

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

  //#region Handler methods
  public onClickToggleSliderEventHandler(event: MatSlideToggleChange): void {
    console.log(event.checked);
    this.clickToggleSliderEvent.emit(event.checked);
  }
  //#endregion

  //#region Main logic methods
  private _getProfile(): void {
    this._userService.getProfileItem().subscribe({
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
