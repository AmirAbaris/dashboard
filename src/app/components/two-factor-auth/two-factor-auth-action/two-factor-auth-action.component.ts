import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-two-factor-auth-action',
  templateUrl: './two-factor-auth-action.component.html',
  styleUrl: './two-factor-auth-action.component.scss'
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