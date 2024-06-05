import { Component, OnInit, inject, output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TwoFactorAuthModel } from '../models/two-factor-auth.model';
import { TwoFactorAuthMainCaptionModel } from '../models/caption-models/two-factor-auth-main.caption.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-two-factor-auth-two-factor-auth-main',
  templateUrl: './two-factor-auth-two-factor-auth-main.component.html',
  styleUrl: './two-factor-auth-two-factor-auth-main.component.scss'
})
export class TwoFactorAuthTwoFactorAuthMainComponent implements OnInit {
  //#region Properties
  private readonly _translateService = inject(TranslateService);
  private readonly _userService = inject(UserService);

  public onAddButtonClickEvent = output<void>();
  public onEditButtonClickEvent = output<void>();
  public onSetUpButtonClickEvent = output<void>();

  public twoFactorAuthItem: TwoFactorAuthModel | undefined;
  public caption: TwoFactorAuthMainCaptionModel | undefined;
  private readonly _captionPath = {
    twoFactorMainCaption: 'two-factor-auth.two-factor-auth-main'
  }
  //#endregion

  //#region Lifecycle methods
  public ngOnInit(): void {
    this._getCaptions();
    this._getData();
  }
  //#endregion

  //#region Handler methods
  public onAddButtonClickEventHandler(): void {
    console.log('Add button clicked');
    this.onAddButtonClickEvent.emit();
  }

  public onEditButtonClickEventHandler(): void {
    console.log('Edit button clicked');
    this.onEditButtonClickEvent.emit();
  }

  public onSetUpButtonClickEventHandler(): void {
    console.log('Set up button clicked');
    this.onSetUpButtonClickEvent.emit();
  }
  //#endregion

  //#region Main logic methods
  private _getCaptions(): void {
    this._translateService.get(this._captionPath.twoFactorMainCaption).subscribe((caption) => {
      this.caption = caption;
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