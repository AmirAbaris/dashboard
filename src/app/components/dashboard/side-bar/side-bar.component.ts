import { Component, OnInit, input, model, output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SidebarCaptionModel } from '../models/caption-models/sidebar.caption.model';
import { SideBarSectionModel, SidebarItemModel } from '../models/sidebar-item.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0px', overflow: 'hidden', opacity: 0 })),
      state('expanded', style({ height: '*', overflow: 'hidden', opacity: 1 })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out'))
    ])
  ]
})
export class SideBarComponent implements OnInit {
  //#region Properties
  public data = model.required<SideBarSectionModel[]>();
  public caption = input.required<SidebarCaptionModel>();

  public clickDocButtonEvent = output();
  //#endregion

  //#region Lifecycle methods
  public ngOnInit(): void {
    this._loadSidebarState();
  }
  //#endregion

  //#region Handler methods
  public toggleHandler(item: SidebarItemModel): void {
    item.isExpanded = !item.isExpanded;

    this._saveSidebarState();
  }

  public onClickDocumentationButtonEventHandler(): void {
    this.clickDocButtonEvent.emit();
  }
  //#endregion

  //#region Main logic methods
  private _saveSidebarState() {
    const state = this.data().map(section => {
      return {
        ...section,
        items: section.items.map(item => ({
          ...item,
          isExpanded: item.isExpanded
        }))
      };
    });

    localStorage.setItem('sidebarState', JSON.stringify(state));
  }

  private _loadSidebarState() {
    const state = localStorage.getItem('sidebarState');
    if (state) {
      this.data.set(JSON.parse(state));
    }
  }
  //#endregion
}
