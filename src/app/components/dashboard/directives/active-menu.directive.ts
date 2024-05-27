import { AfterViewInit, Directive, ElementRef, OnChanges, Renderer2, SimpleChanges, inject, input } from '@angular/core';

@Directive({
  selector: '[activeMenuDir]'
})
export class ActiveMenuDirective implements AfterViewInit, OnChanges {
  //#region Properties
  private readonly _el = inject(ElementRef);
  private readonly _renderer = inject(Renderer2);

  public itemTitle = input.required<string>();
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

    // if url path started URL matched with item title, it will be true!
    if (!urlPath) return;
    const isActive = urlPath.startsWith('/' + this.itemTitle().toLocaleLowerCase());

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

