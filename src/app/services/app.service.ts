import { Injectable, inject } from '@angular/core';
import { SideBarSectionModel } from '../components/dashboard/models/sidebar-item.model';
import { Observable } from 'rxjs';
import { AppRepository } from '../repositories/app-repository';
import { AccountMenuItemModel } from '../components/account-menu/models/account-menu-item.model';

@Injectable()
export class AppService {
  //#region Properties
  private readonly _appRepository = inject(AppRepository);
  //#endregion

  //#region Main logic methods
  public getSidebarData(): Observable<SideBarSectionModel[]> {
    return this._appRepository.getSidebarItems();
  }

  public getMenuItemData(): Observable<AccountMenuItemModel[]> {
    return this._appRepository.getAccountMenuItems();
  }
  //#endregion
}