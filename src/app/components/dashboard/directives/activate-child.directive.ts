import { Directive, ElementRef, Renderer2, inject, input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Directive({
  selector: '[activateChildDir]'
})
export class ActivateChildDirective {
  //#region Properties
  private readonly _router = inject(Router);
  private readonly _el = inject(ElementRef);
  private readonly _renderer = inject(Renderer2);

  public childTitle = input<string>();
  //#endregion

  //#region Lifecycle methods
  ngOnInit(): void {
    this._applyForActiveChildren();
  }
  //#endregion

  //#region Main logic methods
  private _applyForActiveChildren(): void {
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentUrl = this._router.url;
      const normalizedTitle: string | undefined = this.normalizeTitle(this.childTitle()?.toLowerCase());
      const normalizedUrl = this.normalizeUrl(currentUrl);

      const element: HTMLElement = this._el.nativeElement;
      const circleIcon: HTMLElement | null = element.querySelector('.circle-icon');
      const childTitleElement: HTMLElement | null = element.querySelector('.child-title');

      // add a guard to make sure title is not null
      if (!normalizedTitle) return;
      
      this.toggleActiveClass(circleIcon, normalizedUrl, normalizedTitle);
      this.toggleActiveClass(childTitleElement, normalizedUrl, normalizedTitle);
    });
  }

  /**
   * Toggles the 'active' class for the given element based on the normalized URL and title.
   * @param element The HTML element to toggle the 'active' class on.
   * @param normalizedUrl The normalized URL of the current page.
   * @param normalizedTitle The normalized title of the child item.
   */
  private toggleActiveClass(element: HTMLElement | null, normalizedUrl: string | undefined, normalizedTitle: string): void {
    if (!element || !normalizedUrl || !normalizedTitle) return;

    if (normalizedUrl.includes(normalizedTitle)) {
      this._renderer.addClass(element, 'active');
    } else {
      this._renderer.removeClass(element, 'active');
    }
  }

  /**
   * Normalizes the title by replacing spaces with dashes.
   * @param title The title to normalize.
   * @returns The normalized title.
   */
  private normalizeTitle(title: string | undefined): string | undefined {
    if (!title) return;

    return title.replace(/\s+/g, '-');
  }

  /**
   * Normalizes the URL by replacing slashes with dashes.
   * @param url The URL to normalize.
   * @returns The normalized URL.
   */
  private normalizeUrl(url: string): string {
    return url.replace(/\//g, '-');
  }
  //#endregion
}
