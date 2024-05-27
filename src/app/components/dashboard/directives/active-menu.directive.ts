import { AfterViewInit, Directive, ElementRef, Renderer2, inject, input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Directive({
  selector: '[activeMenuDir]'
})
export class ActiveMenuDirective implements AfterViewInit {
  //#region Properties
  private readonly _router = inject(Router);
  private readonly _el = inject(ElementRef);
  private readonly _renderer = inject(Renderer2);

  public itemTitle = input.required<string>();
  //#endregion

  //#region Lifecycle methods
  public ngAfterViewInit(): void {
    this._applyForActiveItems();
  }
  //#endregion

  //#region Main logic methods
  private _applyForActiveItems() {
    const currentUrl = this._router.url;
    const targetElement: HTMLElement = this._el.nativeElement;
    const iconContainer: HTMLElement | null = targetElement.querySelector('.icon-container');
    const titleIcon: HTMLElement | null = targetElement.querySelector('.title-icon');

    // if url path started URL matched with item title, it will be true!
    const isActive = currentUrl.startsWith('/' + this.itemTitle().toLocaleLowerCase());

    this._toggleClass(targetElement, 'shadow-md', isActive);
    this._toggleClass(targetElement, 'bg-white', isActive);

    if (iconContainer && titleIcon) {
      this._toggleClass(iconContainer, 'bg-magenta', isActive);
      this._toggleClass(iconContainer, 'active', isActive);
    }
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

