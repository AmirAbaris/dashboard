import { Component, input } from '@angular/core';
import { AccountMenuItemModel } from '../models/account-menu-item.model';

@Component({
  selector: 'app-account-setting-menu-items',
  templateUrl: './account-setting-menu-items.component.html',
  styleUrl: './account-setting-menu-items.component.scss'
})
export class AccountSettingMenuItemsComponent {
  //#region Properties
  public data = input.required<AccountMenuItemModel>();
  //#endregion
}
