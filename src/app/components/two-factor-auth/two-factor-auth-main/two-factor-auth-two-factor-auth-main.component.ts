import { TwoFactorAuthActionCaptionModel } from './../models/caption-models/two-factor-auth-action.caption.model';
import { Component, OnInit, inject, output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TwoFactorAuthModel } from '../models/two-factor-auth.model';
import { TwoFactorAuthMainCaptionModel } from '../models/caption-models/two-factor-auth-main.caption.model';
import { UserService } from '../../../services/user.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-two-factor-auth-two-factor-auth-main',
  templateUrl: './two-factor-auth-two-factor-auth-main.component.html',
  styleUrl: './two-factor-auth-two-factor-auth-main.component.scss'
})
export class TwoFactorAuthTwoFactorAuthMainComponent implements OnInit {
  //#region Properties
  private readonly _translateService = inject(TranslateService);
  private readonly _userService = inject(UserService);

  public onButtonClickEvent = output<void>();

  public twoFactorAuthItem: TwoFactorAuthModel | undefined;
  public twoFactorMainCaption: TwoFactorAuthMainCaptionModel | undefined;
  public twoFactorActionCaption: TwoFactorAuthActionCaptionModel | undefined;
  private readonly _captionPath = {
    twoFactorMainCaption: 'two-factor-auth.two-factor-auth-main',
    twoFactorActionCaption: 'two-factor-auth.two-factor-auth-action'
  }
  //#endregion

  //#region Lifecycle methods
  public ngOnInit(): void {
    this._getCaptions();
    this._getData();
  }
  //#endregion

  //#region Handler methods
  public onButtonClickEventHandler(): void {
    console.log('button clicked');
    this.onButtonClickEvent.emit();
  }
  //#endregion

  //#region Main logic methods
  private _getCaptions(): void {
    const twoFactorMainCaption = this._translateService.get(this._captionPath.twoFactorMainCaption);
    const twoFactorActionCaption = this._translateService.get(this._captionPath.twoFactorActionCaption);

    forkJoin([twoFactorMainCaption, twoFactorActionCaption]).subscribe(([twoFactorMainCaptionData, twoFactorActionCaptionData]) => {
      this.twoFactorMainCaption = twoFactorMainCaptionData;
      this.twoFactorActionCaption = twoFactorActionCaptionData;
    });
  }

  private _getData(): void {
    this._userService.getTwoFactorAuthItem().subscribe({
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