import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountMenuItemModel } from '../components/account-setting/models/account-menu-item.model';
import { ProfileModel } from '../components/account-setting/models/profile.model';
import { UserRepository } from '../repositories/user.repository';
import { TwoFactorAuthModel } from '../components/two-factor-auth/models/two-factor-auth.model';

@Injectable()
export class UserService {
  //#region Properties
  private readonly _userRepository = inject(UserRepository);
  //#endregion

  //#region Main logic methods
  public getProjectItems(): Observable<ProjectItemModel[]> {
    return this._userRepository.getProjectItems();
  }

  public getProfileItem(): Observable<ProfileModel> {
    return this._userRepository.getProfileItem();
  }

  public getTwoFactorAuthItem(): Observable<TwoFactorAuthModel> {
    return this._userRepository.getTwoFactorAuthItem();
  }

  public getMenuItemData(): Observable<AccountMenuItemModel[]> {
    return this._userRepository.getAccountMenuItems();
  }
  //#endregion
}
