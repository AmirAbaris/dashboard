import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileOverviewConversationItemModel } from '../components/profile-overview-general/models/profile-overview-conversation-item.model';
import { ProfileOverviewProfileInfoModel } from '../components/profile-overview-general/models/profile-overview-profile-info.model';
import { ProfileModel } from '../components/profile/models/profile.model';
import { AccountMenuItemModel } from '../components/account-setting-main/models/account-menu-item.model';
import { TwoFactorAuthModel } from '../components/two-factor-auth/models/two-factor-auth.model';
import { EnvironmentService } from '../services/environment.service';

@Injectable()
export class UserRepository {
  //#region Properties
  private readonly _http = inject(HttpClient);
  private readonly _environmentService = inject(EnvironmentService);

  private readonly _dataFilePaths = {
    profileItem: 'profile-item.json',
    profileInfoItem: 'profile-info-item.json',
    conversationItems: 'conversation-items.json',
    accountMenuItems: 'account-menu-items.json',
    twoFactorAuthItem: 'two-factor-auth-item.json'
  }
  //#endregion

  //#region Main logic methods
  public getProfileItem(): Observable<ProfileModel> {
    return this._http.get<ProfileModel>(`${this._environmentService.environmentConfig.dataUrl}${this._dataFilePaths.profileItem}`);
  }

  public getProfileInfoItem(): Observable<ProfileOverviewProfileInfoModel> {
    return this._http.get<ProfileOverviewProfileInfoModel>(`${this._environmentService.environmentConfig.dataUrl}${this._dataFilePaths.profileInfoItem}`);
  }

  public getConversationItems(): Observable<ProfileOverviewConversationItemModel[]> {
    return this._http.get<ProfileOverviewConversationItemModel[]>(`${this._environmentService.environmentConfig.dataUrl}${this._dataFilePaths.conversationItems}`);
  }

  public getAccountMenuItems(): Observable<AccountMenuItemModel[]> {
    return this._http.get<AccountMenuItemModel[]>(`${this._environmentService.environmentConfig.dataUrl}${this._dataFilePaths.accountMenuItems}`);
  }

  public getTwoFactorAuthItem(): Observable<TwoFactorAuthModel> {
    return this._http.get<TwoFactorAuthModel>(`${this._environmentService.environmentConfig.dataUrl}${this._dataFilePaths.twoFactorAuthItem}`);
  }
  //#endregion
}
