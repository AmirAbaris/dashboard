import { Injectable, inject } from '@angular/core';
import { SideBarSectionModel } from '../components/dashboard/models/sidebar-item.model';
import { Observable } from 'rxjs';
import { AppRepository } from '../repositories/app-repository';
import { ProjectItemModel } from '../components/profile-project/models/project-item.model';
import { ProfileModel } from '../components/profile/models/profile.model';
import { ProfileInfoModel } from '../components/profile-overview-general/models/profile-info.model';
import { HouseProjectModel } from '../components/profile-overview-house-project/models/house-project.model';
import { ConversationItemModel } from '../components/profile-overview-general/models/conversation-item.model';

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
    return this._appRepository.getProjectItems();
  }

  public getProfileItem(): Observable<ProfileModel> {
    return this._appRepository.getProfileItem();
  }

  public getProfileInfoItem(): Observable<ProfileInfoModel> {
    return this._appRepository.getProfileInfoItem();
  }

  public getHouseProjectItems(): Observable<HouseProjectModel[]> {
    return this._appRepository.getHouseProjectItems();
  }

  public getConversationItems(): Observable<ConversationItemModel[]> {
    return this._appRepository.getConversationItems();
  }
  //#endregion
}