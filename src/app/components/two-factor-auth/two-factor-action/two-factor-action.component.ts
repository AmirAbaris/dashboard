import { Component, input } from '@angular/core';
import { TwoFactorAuthActionItemModel } from '../models/two-factor-auth-action-item.model';

@Component({
  selector: 'app-two-factor-action',
  templateUrl: './two-factor-action.component.html',
  styleUrl: './two-factor-action.component.scss'
})
export class TwoFactorActionComponent {
  //#region Properties
  public data = input.required<TwoFactorAuthActionItemModel>();
  //#endregion

}
