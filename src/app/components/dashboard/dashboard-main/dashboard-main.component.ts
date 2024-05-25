import { Component, OnInit, inject } from '@angular/core';
import { SidebarCaptionModel } from '../models/caption-models/sidebar.caption.model';
import { TranslateService } from '@ngx-translate/core';
import { SideBarSectionModel } from '../models/sidebar-item.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrl: './dashboard-main.component.scss'
})
export class DashboardMainComponent implements OnInit {
  //#region Properties
  private _translateService = inject(TranslateService);
  private _userService = inject(UserService);

  public sidebarItems: SideBarSectionModel[] | undefined;
  public sidebarCaption: SidebarCaptionModel | undefined;
  private readonly _captionPath = {
    sidebarPath: 'dashboard.sidebar'
  }
  //#endregion

  //#region Lifecycle methods
  public ngOnInit(): void {
    this._getCaptions();
    this._getSidebarItems();
  }
  //#endregion

  //#region Main logic methods
  private _getCaptions(): void {
    this._translateService.get(this._captionPath.sidebarPath).subscribe((caption) => {
      this.sidebarCaption = caption;
    });
  }

  private _getSidebarItems(): void {
    this._userService.getSidebarData().subscribe({
      next: (items) => {
        this.sidebarItems = items;
      },
      error: (err) => {
        console.log(err.message);
      }
    });
  }
  //#endregion
}