import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { AccountMenuItemModel } from '../components/account-menu/models/account-menu-item.model';
import { ProfileModel } from '../components/account-menu/models/profile.model';

@Injectable()
export class UserRepository {
  //#region Properties
  private readonly _http = inject(HttpClient);

  private readonly _dataFilePath = {
    profileItem: 'profile-item.json',
    accountMenuItems: 'account-menu-items.json'
  }
  //#endregion

  //#region Main logic methods
  public getProfileItem(): Observable<ProfileModel> {
    return this._http.get<ProfileModel>(`${environment.mockDataFileUrl}${this._dataFilePath.profileItem}`);
  }

  public getAccountMenuItems(): Observable<AccountMenuItemModel[]> {
    return this._http.get<AccountMenuItemModel[]>(`${environment.mockDataFileUrl}${this._dataFilePath.accountMenuItems}`);
  }
  //#endregion
}
