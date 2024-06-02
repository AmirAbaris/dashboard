import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TwoFactorAuthMainInputCaptionModel } from '../models/caption-models/two-factor-auth-main-input.caption.model';
import { forkJoin } from 'rxjs';
import { TwoFactorAuthModel } from '../models/two-factor-auth.model';
import { AppService } from '../../../services/app.service';

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
  public caption: TwoFactorAuthMainInputCaptionModel | undefined;
  private readonly _captionPath = {
    twoFactorMainCaption: 'two-factor-auth.two-factor-auth-main',
    twoFactorActionCaption: 'two-factor-auth.two-factor-action'
  }
  //#endregion

  //#region Lifecycle methods
  public ngOnInit(): void {
    this._getCaptions();
    this._getTwoFactorAuthItem();
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
        this.caption = {
          mainCaption: twoFactorMainCaption,
          actionCaption: twoFactorActionCaption
        };
      },
      error: (err) => {
        console.error('Error fetching translations:', err);
      }
    });
  }

  private _getTwoFactorAuthItem(): void {
    this._appService.getTwoFactorAuthItem().subscribe({
      next: (data) => {
        this.twoFactorAuthItem = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  //#endregion
}