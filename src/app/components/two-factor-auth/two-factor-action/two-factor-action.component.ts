import { Component, OnInit, input } from '@angular/core';
import { TwoFactorAuthActionCaptionModel } from '../models/caption-models/two-factor-auth-action.caption.model';
import { TwoFactorAuthModel } from '../models/two-factor-auth.model';
import { TwoFactorAuthActionItemModel } from '../models/two-factor-auth-action-item.model';
import { SmsNumberStatusModel } from '../models/sms-number-status.model';

@Component({
  selector: 'app-two-factor-action',
  templateUrl: './two-factor-action.component.html',
  styleUrl: './two-factor-action.component.scss'
})
export class TwoFactorActionComponent implements OnInit {
  //#region Properties
  public data = input.required<TwoFactorAuthModel>();
  public caption = input.required<TwoFactorAuthActionCaptionModel>();

  public itemTitles: string[] = [];
  public itemStatues: string[] = [];
  public buttonTexts: string[] = [];
  public actionItemData: TwoFactorAuthActionItemModel[] = [];
  //#endregion

  public ngOnInit(): void {
    this.actionItemData = this._convertDataToTwoFactorAuthActionItemModel();
  }

  private _convertDataToTitles(): void {
    this.itemTitles = [
      this.caption().SecurityKeyLabel,
      this.caption().smsLabel,
      this.caption().authLabel
    ];
  }

  private _convertDataToItemStatues(): void {
    const securityKeysStatus = this.data().securityKeysStatus;
    const smsStatus = this._getSmsStatus();
    const authenticatorStatus = this.data().authenticatorStatus;

    this.itemStatues = [securityKeysStatus, smsStatus, authenticatorStatus];
  }

  private _convertDataToButtonTexts(): void {
    this.buttonTexts = [
      this.caption().addButton,
      this.caption().editButton,
      this.caption().setupButton
    ];
  }

  private _convertDataToTwoFactorAuthActionItemModel(): TwoFactorAuthActionItemModel[] {
    this._convertDataToTitles();
    this._convertDataToItemStatues();
    this._convertDataToButtonTexts();

    return this.itemTitles.map((title, index) => ({
      title,
      status: this.itemStatues[index],
      buttonText: this.buttonTexts[index]
    }));
  }
}
