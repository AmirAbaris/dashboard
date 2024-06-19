import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HouseProjectItemModel } from '../components/profile-overview-general/models/house-project-item.model';
import { ProjectItemModel } from '../components/profile-project/models/project-item.model';
import { EnvironmentService } from '../services/environment.service';

@Injectable()
export class ProfileRepository {
  //#region Properties
  private readonly _http = inject(HttpClient);
  private readonly _environmentService = inject(EnvironmentService);

  private readonly _dataFilePaths = {
    houseProjectItems: 'house-project-items.json',
    projectItems: 'project-items.json'
  }
  //#endregion

  //#region Main logic methods
  public getProjectItems(): Observable<ProjectItemModel[]> {
    return this._http.get<ProjectItemModel[]>(`${this._environmentService.environmentConfig.dataUrl}${this._dataFilePaths.projectItems}`);
  }

  public getHouseProjectItems(): Observable<HouseProjectItemModel[]> {
    return this._http.get<HouseProjectItemModel[]>(`${this._environmentService.environmentConfig.dataUrl}${this._dataFilePaths.houseProjectItems}`);
  }
  //#endregion
}
