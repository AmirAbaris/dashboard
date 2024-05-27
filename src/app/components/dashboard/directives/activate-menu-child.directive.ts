import { AfterViewInit, Directive, ElementRef, OnChanges, Renderer2, SimpleChanges, inject, input } from '@angular/core';

@Directive({
  selector: '[activateMenuChildDir]'
})
export class ActivateMenuChildDirective implements AfterViewInit, OnChanges {
  //#region Properties
  private readonly _el = inject(ElementRef);
  private readonly _renderer = inject(Renderer2);

  public childLink = input<string>();
  public url = input<string>();

  private _circleIcon: HTMLElement | null = null;
  private _childTitleElement: HTMLElement | null = null;
  //#endregion

  //#region Lifecycle methods
  public ngAfterViewInit(): void {
    this._initializeElements();
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
    if (this.url() === this.childLink()) {
      this._addClass(this._circleIcon, 'active');
      this._addClass(this._childTitleElement, 'active');
    }
    else {
      this._removeClass(this._circleIcon, 'active');
      this._removeClass(this._childTitleElement, 'active');
    }
  }

  /**
   * created methods like this to handle null element parameters!
   */
  private _addClass(element: HTMLElement | null, className: string): void {
    if (!element) return;

    this._renderer.addClass(element, className);
  }

  private _removeClass(element: HTMLElement | null, className: string): void {
    if (!element) return;

    this._renderer.removeClass(element, className);
  }

  private _initializeElements(): void {
    const element: HTMLElement = this._el.nativeElement;

    this._circleIcon = element.querySelector('.circle-icon');
    this._childTitleElement = element.querySelector('.child-title');
  }
  //#endregion
}