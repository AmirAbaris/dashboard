import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SideBarSectionModel } from '../components/dashboard/models/sidebar-item.model';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from '../services/environment.service';

@Injectable()
export class AppRepository {
  //#region Properties
  private readonly _http = inject(HttpClient);
  private readonly _environmentService = inject(EnvironmentService);

  private readonly _dataFilePaths = {
    sidebarItems: 'side-bar-items.json'
  }
  //#endregion

  //#region Main logic methods
  public getSidebarItems(): Observable<SideBarSectionModel[]> {
    return this._http.get<SideBarSectionModel[]>(`${this._environmentService.environmentConfig.configUrl}${this._dataFilePaths.sidebarItems}`);
  }
  //#endregion
}
