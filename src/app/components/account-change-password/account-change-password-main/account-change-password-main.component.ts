import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordStrengthValidator } from '../helpers/password-strength-validator';
import { TranslateService } from '@ngx-translate/core';
import { ChangePasswordCaptionModel } from '../models/caption-models/change-password.caption.model';
import { forkJoin } from 'rxjs';
import { ChangePasswordFromModel } from '../models/change-password-form.model';
import { passwordMatchValidator } from '../helpers/password-match-validator';
import { EnvironmentService } from '../../../services/environment.service';

@Component({
  selector: 'app-account-change-password-main',
  templateUrl: './account-change-password-main.component.html',
  styleUrl: './account-change-password-main.component.scss'
})
export class AccountChangePasswordMainComponent implements OnInit {
  //#region Properties
  private readonly _fb = inject(FormBuilder);
  private readonly _translateService = inject(TranslateService);
  private readonly _environmentService = inject(EnvironmentService);

  public readonly formKeys = {
    currentPasswordCtrl: 'currentPasswordCtrl',
    newPasswordCtrl: 'newPasswordCtrl',
    confirmNewPasswordCtrl: 'confirmNewPasswordCtrl'
  }
  public readonly passwordInputMarginHeightItems = {
    currentPasswordHeight: '0.5rem',
    newPasswordHeight: '2.8rem'
  }
  public fg: FormGroup | undefined;
  public changePasswordCaption: ChangePasswordCaptionModel | undefined;
  private readonly _passwordMinLength = this._environmentService.environmentConfig.passwordMinLength;
  private readonly _captionPath = {
    changePasswordPath: 'account-change-password.account-change-password-main',
    passwordErrorPath: 'account-change-password.password-error'
  }
  //#endregion

  //#region Lifecycle methods
  public ngOnInit(): void {
    this._initializeChangePasswordForm();
    this._getCaptions();
  }

  //#region Handler methods
  public onClickSubmitButtonEventHandler(): void {
    if (!this.fg) return;

    const changePasswordFromModel = this._convertFormGroupValueToChangePasswordFromModel(this.fg);
    console.log(changePasswordFromModel);
  }
  //#endregion

  //#region Main logic methods
  private _initializeChangePasswordForm(): void {
    this.fg = this._fb.group({
      [this.formKeys.currentPasswordCtrl]: [null, [Validators.required, Validators.minLength(this._passwordMinLength)]],
      [this.formKeys.newPasswordCtrl]: [null, [
        Validators.required,
        Validators.minLength(this._passwordMinLength),
        passwordStrengthValidator
      ]],
      [this.formKeys.confirmNewPasswordCtrl]: [null, [
        Validators.required
      ]]
    }, { validators: passwordMatchValidator });
  }

  private _getCaptions(): void {
    this._translateService.get(this._captionPath.changePasswordPath).subscribe({
      next: (changePasswordCaption) => {
        this.changePasswordCaption = changePasswordCaption;
      },
      error: (err) => {
        console.error('Error fetching translations:', err);
      }
    });
  }
  //#endregion

  //#region Helper methods
  private _convertFormGroupValueToChangePasswordFromModel(formGroup: FormGroup): ChangePasswordFromModel {
    const changePasswordFromData: ChangePasswordFromModel = {
      currentPassword: formGroup.get(this.formKeys.currentPasswordCtrl)?.value,
      newPassword: formGroup.get(this.formKeys.newPasswordCtrl)?.value,
      confirmPassword: formGroup.get(this.formKeys.confirmNewPasswordCtrl)?.value
    }

    return changePasswordFromData;
  }
  //#endregion
}
