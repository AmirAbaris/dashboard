import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { SideBarSectionModel } from '../components/dashboard/models/sidebar-item.model';
import { HttpClient } from '@angular/common/http';
import { AccountMenuItemModel } from '../components/account-menu/models/account-menu-item.model';

@Injectable()
export class AppRepository {
  //#region Properties
  private readonly _http = inject(HttpClient);

  private readonly _sidebarFilePath = environment.fileUrl + 'side-bar-items.json';
  private readonly _accountMenuFilePath = environment.fileUrl + 'account-menu-items.json';
  //#endregion

  //#region Main logic methods
  public getSidebarItems(): Observable<SideBarSectionModel[]> {
    return this._http.get<SideBarSectionModel[]>(this._sidebarFilePath);
  }

  public getAccountMenuItems(): Observable<AccountMenuItemModel[]> {
    return this._http.get<AccountMenuItemModel[]>(this._accountMenuFilePath);

  }
  //#endregion
}
