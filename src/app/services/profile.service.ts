import { Injectable, inject } from '@angular/core';
import { ProfileRepository } from '../repositories/profile.repository';
import { Observable } from 'rxjs';
import { HouseProjectItemModel } from '../components/profile-overview-general/models/house-project-item.model';
import { ProjectItemModel } from '../components/profile-project/models/project-item.model';

@Injectable()
export class ProfileService {
  //#region Properties
  private readonly _profileRepository = inject(ProfileRepository);
  //#endregion

  //#region Main logic methods
  public getProjectItems(): Observable<ProjectItemModel[]> {
    return this._profileRepository.getProjectItems();
  }

  public getHouseProjectItems(): Observable<HouseProjectItemModel[]> {
    return this._profileRepository.getHouseProjectItems();
  }
  //#endregion
}
