import { Injectable, inject } from '@angular/core';
import { UserRepository } from '../repositories/user.repository';
import { Observable } from 'rxjs';
import { ProfileModel } from '../components/profile-introduction/models/profile.model';
import { ProjectItemModel } from '../components/profile-project/models/project-item.model';
import { TwoFactorAuthModel } from '../components/two-factor-auth/models/two-factor-auth.model';

@Injectable({
  providedIn: 'root'
})
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

  public getTwoFactorAuthItem(): Observable<TwoFactorAuthModel> {
    return this._userRepository.getTwoFactorAuthItem();
  }
  //#endregion
}
