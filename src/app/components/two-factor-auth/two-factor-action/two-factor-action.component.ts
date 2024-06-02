import { Component, input } from '@angular/core';
import { TwoFactorAuthActionCaptionModel } from '../models/caption-models/two-factor-auth-action.caption.model';
import { TwoFactorAuthModel } from '../models/two-factor-auth.model';

@Component({
  selector: 'app-two-factor-action',
  templateUrl: './two-factor-action.component.html',
  styleUrl: './two-factor-action.component.scss'
})
export class TwoFactorActionComponent {
  //#region Properties
  public data = input.required<TwoFactorAuthModel>();
  public caption = input.required<TwoFactorAuthActionCaptionModel>();
  //#endregion
}
