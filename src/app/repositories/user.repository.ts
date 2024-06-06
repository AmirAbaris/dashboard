import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { AccountMenuItemModel } from '../components/account-setting/models/account-menu-item.model';
import { TwoFactorAuthModel } from '../components/two-factor-auth/models/two-factor-auth.model';
import { ProfileModel } from "../components/account-setting/models/profile.model";
import { ProjectItemModel } from '../components/profile-project/models/project-item.model';

@Injectable()
export class UserRepository {
  //#region Properties
  private readonly _http = inject(HttpClient);

  private readonly _dataFilePath = {
    profileItem: 'profile-item.json',
    accountMenuItems: 'account-menu-items.json',
    projectItems: 'project-items.json',
    twoFactorAuthItem: 'two-factor-auth-item.json'
  }
  //#endregion

  //#region Main logic methods
  public getProfileItem(): Observable<ProfileModel> {
    return this._http.get<ProfileModel>(`${environment.mockDataFileUrl}${this._dataFilePath.profileItem}`);
  }

  public getAccountMenuItems(): Observable<AccountMenuItemModel[]> {
    return this._http.get<AccountMenuItemModel[]>(`${environment.mockDataFileUrl}${this._dataFilePath.accountMenuItems}`);
  }

  public getProjectItems(): Observable<ProjectItemModel[]> {
    return this._http.get<ProjectItemModel[]>(`${environment.mockDataFileUrl}${this._dataFilePath.projectItems}`);
  }

  public getTwoFactorAuthItem(): Observable<TwoFactorAuthModel> {
    return this._http.get<TwoFactorAuthModel>(`${environment.mockDataFileUrl}${this._dataFilePath.twoFactorAuthItem}`);
  }
  //#endregion

}
