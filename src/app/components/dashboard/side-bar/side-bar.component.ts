import { Component, input } from '@angular/core';
import { SidebarItemModel } from '../models/sidebar-item.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  //#region Properties
  public data = input.required<SidebarItemModel[]>();
  //#endregion

  //#region Main logic methods
  public toggle(item: SidebarItemModel): void {
    item.isExpanded = !item.isExpanded;

    console.log('toggled');
  }
  //#endregion
}
