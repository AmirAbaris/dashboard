import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountMenuItemModel } from '../components/account-menu/models/account-menu-item.model';
import { ProfileModel } from '../components/account-menu/models/profile.model';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  //#region Properties
  private readonly _userRepository = inject(UserRepository);
  //#endregion

  //#region Main logic methods
  public getProfileItem(): Observable<ProfileModel> {
    return this._userRepository.getProfileItem();
  }

  public getMenuItemData(): Observable<AccountMenuItemModel[]> {
    return this._userRepository.getAccountMenuItems();
  }
  //#endregion
}
