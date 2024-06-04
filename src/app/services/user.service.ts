import { Injectable, inject } from '@angular/core';
import { UserRepository } from '../repositories/user.repository';
import { Observable } from 'rxjs';
import { ProfileOverviewConversationItemModel } from '../components/profile-overview-general/models/profile-overview-conversation-item.model';
import { ProfileOverviewProfileInfoModel } from '../components/profile-overview-general/models/profile-overview-profile-info.model';
import { HouseProjectModel } from '../components/profile-overview-house-project/models/house-project.model';
import { ProjectItemModel } from '../components/profile-project/models/project-item.model';
import { ProfileModel } from '../components/profile/models/profile.model';

@Injectable()
export class UserService {
  //#region Properties
  private readonly _userRepository = inject(UserRepository);
  //#endregion

  //#region Main logic methods
  public getProjectItems(): Observable<ProjectItemModel[]> {
    return this._userRepository.getProjectItems();
  }

  public getProfileItem(): Observable<ProfileModel> {
    return this._userRepository.getProfileItem();
  }

  public getProfileInfoItem(): Observable<ProfileOverviewProfileInfoModel> {
    return this._userRepository.getProfileInfoItem();
  }

  public getHouseProjectItems(): Observable<HouseProjectModel[]> {
    return this._userRepository.getHouseProjectItems();
  }

  public getConversationItems(): Observable<ProfileOverviewConversationItemModel[]> {
    return this._userRepository.getConversationItems();
  }
  //#endregion
}
