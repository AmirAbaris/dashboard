import { Injectable, inject } from '@angular/core';
import { SideBarSectionModel } from '../components/dashboard/models/sidebar-item.model';
import { Observable } from 'rxjs';
import { AppRepository } from '../repositories/app-repository';
import { ProjectItemModel } from '../components/profile-project/models/project-item.model';
import { ProfileModel } from '../components/profile-introduction/models/profile.model';

@Injectable()
export class AppService {
  //#region Properties
  private readonly _appRepository = inject(AppRepository);
  //#endregion

  //#region Main logic methods
  public getSidebarItems(): Observable<SideBarSectionModel[]> {
    return this._appRepository.getSidebarItems();
  }

  public getProjectItems(): Observable<ProjectItemModel[]> {
    return this._appRepository.getProfileItems();
  }

  public getProfileItem(): Observable<ProfileModel> {
    return this._appRepository.getProfileItem();
  }
  //#endregion
}