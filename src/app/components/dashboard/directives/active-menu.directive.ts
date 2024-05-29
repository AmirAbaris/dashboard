import { AfterViewInit, Directive, ElementRef, OnChanges, Renderer2, SimpleChanges, inject, input } from '@angular/core';
import { SidebarItemModel } from '../models/sidebar-item.model';

@Directive({
  selector: '[activeMenuDir]'
})
export class ActiveMenuDirective implements AfterViewInit, OnChanges {
  //#region Properties
  private readonly _el = inject(ElementRef);
  private readonly _renderer = inject(Renderer2);

  public itemMenu = input.required<SidebarItemModel>();
  public url = input<string>();
  //#endregion

  //#region Lifecycle methods
  public ngAfterViewInit(): void {
    this._applyForActiveItems();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['url']) {
      this._applyForActiveItems();
    }
  }
  //#endregion

  //#region Main logic methods
  private _applyForActiveItems(): void {
    const targetElement: HTMLElement = this._el.nativeElement;
    const iconContainer: HTMLElement | null = targetElement.querySelector('.icon-container');
    const titleIcon: HTMLElement | null = targetElement.querySelector('.title-icon');
    const urlPath: string | undefined = this.url();

    if (!urlPath) return;
    const isActive = this._isActiveMenu(this.itemMenu(), urlPath);

    this._toggleClass(targetElement, 'shadow-md', isActive);
    this._toggleClass(targetElement, 'bg-white', isActive);

    if (iconContainer && titleIcon) {
      this._toggleClass(iconContainer, 'bg-magenta', isActive);
      this._toggleClass(iconContainer, 'active', isActive);
    }
  }

  private _isActiveMenu(menu: SidebarItemModel, urlPath: string): boolean {
    if (menu.link && urlPath.startsWith(menu.link)) {
      return true;
    }
    if (menu.children) {
      const childIsActive = menu.children.some(child => this._isActiveMenu(child, urlPath));
      if (childIsActive) {
        menu.isExpanded = true; // Expand the parent menu if a child is active
        return true; // Return true to ensure parent is marked active as well
      }
    }
    menu.isExpanded = false;
    return false;
  }

  private _toggleClass(element: HTMLElement, className: string, canAdd: boolean): void {
    if (canAdd) {
      this._renderer.addClass(element, className);
    } else {
      this._renderer.removeClass(element, className);
    }
  }
  //#endregion
}