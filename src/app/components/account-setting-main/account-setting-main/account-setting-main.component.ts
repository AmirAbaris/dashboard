import { Component, OnInit, inject } from '@angular/core';
import { AccountMenuItemModel } from '../models/account-menu-item.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-account-setting-main',
  templateUrl: './account-setting-main.component.html',
  styleUrl: './account-setting-main.component.scss'
})
export class AccountMenuMainComponent implements OnInit {
  //#region Properties
  private readonly _userService = inject(UserService);

  public menuItems: AccountMenuItemModel[] = [];
  //#endregion

  //#region Lifecycle methods
  public ngOnInit(): void {
    this._getData();
    console.log(this.menuItems);
  }
  //#endregion

  //#region Main logic methods
  private _getData(): void {
    this._userService.getMenuItemData().subscribe((data) => {
      data.forEach(item => {
        this.menuItems.push(item)
      });
    });
  }
  //#endregion
}
