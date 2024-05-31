import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { SideBarSectionModel } from '../components/dashboard/models/sidebar-item.model';
import { HttpClient } from '@angular/common/http';
import { ProfileModel } from '../components/account-profile/models/profile.model';
import { AccountMenuItemModel } from '../components/account-menu/models/account-menu-item.model';

@Injectable()
export class AppRepository {
  //#region Properties
  private readonly _http = inject(HttpClient);

  private readonly _dataFilePath = {
    sidebarItems: 'side-bar-items.json',
    profileItem: 'profile-item.json',
    accountMenuItems: 'account-menu-items.json'
  }
  //#endregion

  //#region Main logic methods
  public getSidebarItems(): Observable<SideBarSectionModel[]> {
    return this._http.get<SideBarSectionModel[]>(`${environment.fileUrl}${this._dataFilePath.sidebarItems}`);
  }

  public getProfileItem(): Observable<ProfileModel> {
    return this._http.get<ProfileModel>(`${environment.fileUrl}${this._dataFilePath.profileItem}`);
  }

  public getAccountMenuItems(): Observable<AccountMenuItemModel[]> {
    return this._http.get<AccountMenuItemModel[]>(`${environment.fileUrl}${this._dataFilePath.accountMenuItems}`);

  }
  //#endregion
}
