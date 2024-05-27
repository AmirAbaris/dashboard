import { AfterViewInit, Directive, ElementRef, OnDestroy, Renderer2, inject, input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Directive({
  selector: '[activateMenuChildDir]'
})
export class ActivateMenuChildDirective implements AfterViewInit, OnDestroy {
  //#region Properties
  private readonly _router = inject(Router);
  private readonly _el = inject(ElementRef);
  private readonly _renderer = inject(Renderer2);

  public childLink = input<string>();
  private _routerSubscription: Subscription | undefined;
  //#endregion

  //#region Lifecycle methods
  public ngAfterViewInit(): void {
    this._routerSubscription = this._router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this._applyForActiveChildren();
    });

    // Initial check
    this._applyForActiveChildren();
  }

  public ngOnDestroy(): void {
    if (this._routerSubscription) {
      this._routerSubscription.unsubscribe();
    }
  }
  //#endregion

  //#region Main logic methods
  private _applyForActiveChildren(): void {
    const currentUrl = this._router.url;
    const element: HTMLElement = this._el.nativeElement;
    const circleIcon: HTMLElement | null = element.querySelector('.circle-icon');
    const childTitleElement: HTMLElement | null = element.querySelector('.child-title');
    const link: string | undefined = this.childLink();

    if (!link) return;
    const isActive = currentUrl.startsWith(link);

    console.log(isActive);

    if (!(circleIcon && childTitleElement)) return;
    this._toggleClass(circleIcon, 'active', isActive);
    this._toggleClass(childTitleElement, 'active', isActive);
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