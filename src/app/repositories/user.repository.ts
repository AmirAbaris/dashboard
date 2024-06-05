import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ProfileModel } from '../components/profile-introduction/models/profile.model';
import { ProjectItemModel } from '../components/profile-project/models/project-item.model';
import { TwoFactorAuthModel } from '../components/two-factor-auth/models/two-factor-auth.model';

@Injectable()
export class UserRepository {
  //#region Properties
  private readonly _http = inject(HttpClient);

  private readonly _dataFilePaths = {
    profileItem: 'profile-item.json',
    projectItems: 'project-items.json',
    twoFactorAuthItem: 'two-factor-auth-item.json'
  }
  //#endregion

  //#region Main logic methods
  public getProjectItems(): Observable<ProjectItemModel[]> {
    return this._http.get<ProjectItemModel[]>(`${environment.mockDataFileUrl}${this._dataFilePaths.projectItems}`);
  }

  public getProfileItem(): Observable<ProfileModel> {
    return this._http.get<ProfileModel>(`${environment.mockDataFileUrl}${this._dataFilePaths.profileItem}`);
  }

  public getTwoFactorAuthItem(): Observable<TwoFactorAuthModel> {
    return this._http.get<TwoFactorAuthModel>(`${environment.mockDataFileUrl}${this._dataFilePaths.twoFactorAuthItem}`);
  }
  //#endregion
}
