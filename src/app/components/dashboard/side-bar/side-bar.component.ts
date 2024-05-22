import { Component, inject, input, output } from '@angular/core';
import { SidebarItemModel } from '../models/sidebar-item.model';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SidebarCaptionModel } from '../models/caption-models/sidebar.caption.model';

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
export class SideBarComponent {
  //#region Properties
  public readonly _router = inject(Router);

  public data = input.required<SidebarItemModel[]>();
  public caption = input.required<SidebarCaptionModel>();

  public clickDocButtonEvent = output();
  //#endregion

  //#region Handler methods
  public onClickDocButtonEventHandler(): void {
    this.clickDocButtonEvent.emit();
  }
  //#endregion

  //#region Main logic methods
  public toggle(item: SidebarItemModel): void {
    item.isExpanded = !item.isExpanded;

    console.log('toggled');
  }

  public isActive(link: string): boolean {
    return this._router.url === link;
  }
  //#endregion
}
