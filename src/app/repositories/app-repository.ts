import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, of } from 'rxjs';
import { SideBarSectionModel } from '../components/dashboard/models/sidebar-item.model';
import { HttpClient } from '@angular/common/http';
import { ProfileInfoModel } from '../components/profile-overview-general/models/profile-info.model';

@Injectable()
export class AppRepository {
  //#region Properties
  private readonly _http = inject(HttpClient);

  private readonly _sidebarFilePath = environment.fileUrl + 'side-bar-items.json';

  private readonly _dataFilePaths = {
    sidebarItems: 'side-bar-items.json',
    profileInfoItem: 'profile-info-item.json',
    projectItems: 'project-items.json'
  }
  //#endregion

  //#region Main logic methods
  public getSidebarItems(): Observable<SideBarSectionModel[]> {
    return this._http.get<SideBarSectionModel[]>(this._sidebarFilePath);
  }

  public getProfileInfoItem(): Observable<ProfileInfoModel> {
    return this._http.get<ProfileInfoModel>(this._sidebarFilePath);
  }
  //#endregion
}
