import { Injectable, inject } from '@angular/core';
import { SideBarSectionModel } from '../components/dashboard/models/sidebar-item.model';
import { Observable } from 'rxjs';
import { AppRepository } from '../repositories/app-repository';
import { ProjectItemModel } from '../components/profile-project/models/project-item.model';
import { ProfileModel } from '../components/profile-introduction/models/profile.model';
import { TwoFactorAuthModel } from '../components/two-factor-auth/models/two-factor-auth.model';

@Injectable()
export class AppService {
  //#region Properties
  private readonly _appRepository = inject(AppRepository);
  //#endregion

  //#region Main logic methods
  public getSidebarItems(): Observable<SideBarSectionModel[]> {
    return this._appRepository.getSidebarItems();
  }
  //#endregion
}