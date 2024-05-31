import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { SideBarSectionModel } from '../components/dashboard/models/sidebar-item.model';
import { HttpClient } from '@angular/common/http';
import { ProfileInfoModel } from '../components/profile-overview-general/models/profile-info.model';
import { HouseProjectModel } from '../components/profile-overview-house-project/models/house-project.model';
import { ConversationItemModel } from '../components/profile-overview-general/models/conversation-item.model';

@Injectable()
export class AppRepository {
  //#region Properties
  private readonly _http = inject(HttpClient);

  private readonly _dataFilePaths = {
    sidebarItems: 'side-bar-items.json',
    profileInfoItem: 'profile-info-item.json',
    houseProjectItems: 'house-project-items.json',
    conversationItems: 'conversation-items.json'
  }
  //#endregion

  //#region Main logic methods
  public getSidebarItems(): Observable<SideBarSectionModel[]> {
    return this._http.get<SideBarSectionModel[]>(`${environment.fileUrl}${this._dataFilePaths.sidebarItems}`);
  }

  public getProfileInfoItem(): Observable<ProfileInfoModel> {
    return this._http.get<ProfileInfoModel>(`${environment.fileUrl}${this._dataFilePaths.profileInfoItem}`);
  }

  public getHouseProjectItems(): Observable<HouseProjectModel[]> {
    return this._http.get<HouseProjectModel[]>(`${environment.fileUrl}${this._dataFilePaths.houseProjectItems}`);
  }

  public getConversationItems(): Observable<ConversationItemModel[]> {
    return this._http.get<ConversationItemModel[]>(`${environment.fileUrl}${this._dataFilePaths.conversationItems}`);
  }
  //#endregion
}
