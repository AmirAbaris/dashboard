import { Component, input } from '@angular/core';

@Component({
  selector: 'app-two-factor-action-item',
  templateUrl: './two-factor-action-item.component.html',
  styleUrl: './two-factor-action-item.component.scss'
})
export class TwoFactorActionItemComponent {
  //#region Properties
  title = input.required<string>();
  status = input<string>();
  buttonText = input.required<string>();
  //#endregion
}
