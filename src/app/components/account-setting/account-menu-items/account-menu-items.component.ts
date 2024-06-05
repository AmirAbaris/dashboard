import { Component, input } from '@angular/core';
import { AccountMenuItemModel } from '../models/account-menu-item.model';

@Component({
  selector: 'app-account-menu-items',
  templateUrl: './account-menu-items.component.html',
  styleUrl: './account-menu-items.component.scss'
})
export class AccountMenuItemsComponent {
  //#region Properties
  public data = input.required<AccountMenuItemModel>();
  //#endregion
}
