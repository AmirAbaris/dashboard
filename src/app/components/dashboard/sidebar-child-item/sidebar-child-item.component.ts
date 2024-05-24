import { Component, inject, input } from '@angular/core';
import { SidebarItemModel } from '../models/sidebar-item.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-child-item',
  templateUrl: './sidebar-child-item.component.html',
  styleUrl: './sidebar-child-item.component.scss',
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0px', overflow: 'hidden', opacity: 0 })),
      state('expanded', style({ height: '*', overflow: 'hidden', opacity: 1 })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out'))
    ])
  ]
})
export class SidebarChildItemComponent {
  public readonly _router = inject(Router);

  public child = input.required<SidebarItemModel>();
  public parentIsExpanded = input<boolean>();
  public level = input<number>(0);

  toggle(item: SidebarItemModel): void {
    item.isExpanded = !item.isExpanded;
  }
}