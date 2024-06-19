import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HouseProjectItemModel } from '../components/profile-overview-general/models/house-project-item.model';
import { ProjectItemModel } from '../components/profile-project/models/project-item.model';

@Injectable()
export class ProfileRepository {
  //#region Properties
  private readonly _http = inject(HttpClient);

  private readonly _dataFilePaths = {
    houseProjectItems: 'house-project-items.json',
    projectItems: 'project-items.json'
  }
  //#endregion

  //#region Main logic methods
  public getProjectItems(): Observable<ProjectItemModel[]> {
    return this._http.get<ProjectItemModel[]>(`${environment.dataUrl}${this._dataFilePaths.projectItems}`);
  }

  public getHouseProjectItems(): Observable<HouseProjectItemModel[]> {
    return this._http.get<HouseProjectItemModel[]>(`${environment.dataUrl}${this._dataFilePaths.houseProjectItems}`);
  }
  //#endregion
}
