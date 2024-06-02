import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, of } from 'rxjs';
import { SideBarSectionModel } from '../components/dashboard/models/sidebar-item.model';
import { HttpClient } from '@angular/common/http';
import { ProjectItemModel } from '../components/profile-project/models/project-item.model';
import { ProfileModel } from '../components/profile-introduction/models/profile.model';
import { TwoFactorAuthModel } from '../components/two-factor-auth/models/two-factor-auth.model';

@Injectable()
export class AppRepository {
  //#region Properties
  private readonly _http = inject(HttpClient);

  private readonly _dataFilePaths = {
    sidebarItems: 'side-bar-items.json',
    profileItem: 'profile-item.json',
    projectItems: 'project-items.json',
    twoFactorAuthItem: 'two-factor-auth-item.json'
  }
  //#endregion

  //#region Main logic methods
  public getSidebarItems(): Observable<SideBarSectionModel[]> {
    return this._http.get<SideBarSectionModel[]>(`${environment.fileUrl}${this._dataFilePaths.sidebarItems}`);
  }

  public getProjectItems(): Observable<ProjectItemModel[]> {
    return this._http.get<ProjectItemModel[]>(`${environment.fileUrl}${this._dataFilePaths.projectItems}`);
  }

  public getProfileItem(): Observable<ProfileModel> {
    return this._http.get<ProfileModel>(`${environment.fileUrl}${this._dataFilePaths.profileItem}`);
  }

  public getTwoFactorAuthItem(): Observable<TwoFactorAuthModel> {
    return this._http.get<TwoFactorAuthModel>(`${environment.fileUrl}${this._dataFilePaths.twoFactorAuthItem}`);
  }
  //#endregion
}
