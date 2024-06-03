import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';
import { TwoFactorAuthModel } from '../models/two-factor-auth.model';
import { AppService } from '../../../services/app.service';
import { TwoFactorAuthActionItemModel } from '../models/two-factor-auth-action-item.model';
import { SmsNumberStatusModel } from '../models/sms-number-status.model';
import { TwoFactorAuthMainCaptionModel } from '../models/caption-models/two-factor-auth-main.caption.model';
import { TwoFactorAuthActionCaptionModel } from '../models/caption-models/two-factor-auth-action.caption.model';

@Component({
  selector: 'app-two-factor-auth-two-factor-auth-main',
  templateUrl: './two-factor-auth-two-factor-auth-main.component.html',
  styleUrl: './two-factor-auth-two-factor-auth-main.component.scss'
})
export class TwoFactorAuthTwoFactorAuthMainComponent implements OnInit {
  //#region Properties
  private readonly _translateService = inject(TranslateService);
  private readonly _appService = inject(AppService);

  public twoFactorAuthItem: TwoFactorAuthModel | undefined;
  public mainCaption: TwoFactorAuthMainCaptionModel | undefined;
  public actionItemData: TwoFactorAuthActionItemModel[] | undefined;
  private readonly _captionPath = {
    twoFactorMainCaption: 'two-factor-auth.two-factor-auth-main',
    twoFactorActionCaption: 'two-factor-auth.two-factor-action'
  }
  private _actionCaption: TwoFactorAuthActionCaptionModel | undefined;
  //#endregion

  //#region Lifecycle methods
  public ngOnInit(): void {
    this._getCaptions();
    this._loadData();
  }
  //#endregion

  //#region Main logic methods
  private _getCaptions(): void {
    const twoFactorMainCaption = this._translateService.get(this._captionPath.twoFactorMainCaption);
    const twoFactorActionCaption = this._translateService.get(this._captionPath.twoFactorActionCaption);

    forkJoin({
      twoFactorMainCaption,
      twoFactorActionCaption
    }).subscribe({
      next: ({ twoFactorMainCaption, twoFactorActionCaption }) => {
        this.mainCaption = twoFactorMainCaption;
        this._actionCaption = twoFactorActionCaption;
      },
      error: (err) => {
        console.error('Error fetching translations:', err);
      }
    });
  }

  private _loadData(): void {
    this._appService.getTwoFactorAuthItem().subscribe({
      next: (data) => {
        this.twoFactorAuthItem = data;
        this.actionItemData = this._convertDataToTwoFactorAuthActionItemModel();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  /**
   * Retrieves the SMS status based on the current two-factor authentication item.
   *
   * @return {string} The SMS status, which can be either the configured number or the status itself.
   */
  private _getSmsStatus(): string {
    // TODO: fix
    if (!this.twoFactorAuthItem) return '';

    const smsNumberStatus: SmsNumberStatusModel = this.twoFactorAuthItem.smsNumberStatus;

    if (smsNumberStatus.status === 'Configured' && smsNumberStatus.number) {
      return smsNumberStatus.number;
    }
    else {
      return smsNumberStatus.status;
    }
  }
  //#endregion

  //#region Helper methods
  private _convertDataToTitles(): string[] {
    if (!this._actionCaption) return [];

    return [
      this._actionCaption.SecurityKeyLabel,
      this._actionCaption.smsLabel,
      this._actionCaption.authLabel
    ];
  }

  private _convertDataToItemStatues(): string[] {
    if (!this.twoFactorAuthItem) return [];

    const securityKeysStatus = this.twoFactorAuthItem.securityKeysStatus;
    const smsStatus = this._getSmsStatus();
    const authenticatorStatus = this.twoFactorAuthItem.authenticatorStatus;

    return [securityKeysStatus, smsStatus, authenticatorStatus];
  }

  private _convertDataToButtonTexts(): string[] {
    if (!this._actionCaption) return [];

    return [
      this._actionCaption.addButton,
      this._actionCaption.editButton,
      this._actionCaption.setupButton
    ];
  }

  /**
 * Converts the data into an array of TwoFactorAuthActionItemModel objects.
 *
 * @return {TwoFactorAuthActionItemModel[]} The array of TwoFactorAuthActionItemModel objects.
 */
  private _convertDataToTwoFactorAuthActionItemModel(): TwoFactorAuthActionItemModel[] {
    const itemTitles = this._convertDataToTitles();
    const itemStatues = this._convertDataToItemStatues();
    const buttonTexts = this._convertDataToButtonTexts();

    return itemTitles.map((title, index) => ({
      title,
      status: itemStatues[index],
      buttonText: buttonTexts[index]
    }));
  }
  //#endregion
}