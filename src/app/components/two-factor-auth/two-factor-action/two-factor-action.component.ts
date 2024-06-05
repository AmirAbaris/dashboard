import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-two-factor-action',
  templateUrl: './two-factor-action.component.html',
  styleUrl: './two-factor-action.component.scss'
})
export class TwoFactorActionComponent {
  //#region Properties
  public data = input.required<string>();
  public title = input.required<string>();
  public buttonCaption = input.required<string>();

  public clickButtonEvent = output<void>();
  //#endregion

  //#region Handler methods
  public onButtonClickEventHandler(): void {
    this.clickButtonEvent.emit();
  }
  //#endregion
}