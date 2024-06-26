import { Injectable, inject } from '@angular/core';
import { UserRepository } from '../repositories/user.repository';
import { Observable } from 'rxjs';
import { ProfileOverviewConversationItemModel } from '../components/profile-overview-general/models/profile-overview-conversation-item.model';
import { ProfileOverviewProfileInfoModel } from '../components/profile-overview-general/models/profile-overview-profile-info.model';
import { ProfileModel } from '../components/profile/models/profile.model';
import { TwoFactorAuthModel } from '../components/two-factor-auth/models/two-factor-auth.model';
import { AccountMenuItemModel } from '../components/account-setting-main/models/account-menu-item.model';

@Injectable()
export class UserService {
  //#region Properties
  private readonly _userRepository = inject(UserRepository);
  //#endregion

  //#region Main logic methods
  public getProfileItem(): Observable<ProfileModel> {
    return this._userRepository.getProfileItem();
  }

  public getProfileInfoItem(): Observable<ProfileOverviewProfileInfoModel> {
    return this._userRepository.getProfileInfoItem();
  }

  public getConversationItems(): Observable<ProfileOverviewConversationItemModel[]> {
    return this._userRepository.getConversationItems();
  }

  public getTwoFactorAuthItem(): Observable<TwoFactorAuthModel> {
    return this._userRepository.getTwoFactorAuthItem();
  }

  public getMenuItemData(): Observable<AccountMenuItemModel[]> {
    return this._userRepository.getAccountMenuItems();
  }
  //#endregion
}
