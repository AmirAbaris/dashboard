import { AfterViewInit, Directive, ElementRef, OnChanges, Renderer2, SimpleChanges, inject, input } from '@angular/core';
import { SidebarItemModel } from '../models/sidebar-item.model';

@Directive({
  selector: '[activateMenuChildDir]'
})
export class ActivateMenuChildDirective implements AfterViewInit, OnChanges {
  //#region Properties
  private readonly _el = inject(ElementRef);
  private readonly _renderer = inject(Renderer2);

  public itemMenu = input.required<SidebarItemModel>();
  public url = input<string>();
  //#endregion

  //#region Lifecycle methods
  public ngAfterViewInit(): void {
    this._applyForActiveChildren();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['url']) {
      this._applyForActiveChildren();
    }
  }
  //#endregion

  //#region Main logic methods
  private _applyForActiveChildren(): void {
    const element: HTMLElement = this._el.nativeElement;
    const circleIcon = element.querySelector('.circle-icon');
    const childTitleElement = element.querySelector('.child-title');
    const urlPath: string | undefined = this.url();
    if (!urlPath) return;
    
    const isActive = this._isActiveMenu(this.itemMenu(), urlPath);

    this._toggleClass(circleIcon, 'active', isActive);
    this._toggleClass(childTitleElement, 'active', isActive);
  }

  private _isActiveMenu(menu: SidebarItemModel, urlPath: string): boolean {
    if (menu.link && urlPath.startsWith(menu.link)) {
      return true;
    }
    if (menu.children) {
      return menu.children.some(child => this._isActiveMenu(child, urlPath));
    }

    return false;
  }

  private _toggleClass(element: Element | null, className: string, canAdd: boolean): void {
    if (!element) return;

    if (canAdd) {
      this._renderer.addClass(element, className);
    } else {
      this._renderer.removeClass(element, className);
    }
  }
  //#endregion
}