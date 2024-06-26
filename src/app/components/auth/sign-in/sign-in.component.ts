import { Component, OnInit, inject } from '@angular/core';
import { SignInCaptionModel } from '../models/caption-models/sign-in.caption.model';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorCaptionModel } from '../models/caption-models/error.caption.model';
import { forkJoin } from 'rxjs';
import { passwordStrengthValidator } from '../../account-change-password/helpers/password-strength-validator';
import { EnvironmentService } from '../../../services/environment.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit {
  //#region Properties
  private readonly _translateService = inject(TranslateService);
  private readonly _fb = inject(FormBuilder);
  private readonly _environmentService = inject(EnvironmentService);

  public readonly formKeys = {
    emailCtrl: 'emailCtrl',
    passwordCtrl: 'passwordCtrl',
    rememberCtrl: 'rememberCtrl'
  }
  public readonly passwordInputMarginHeightItems = {
    passwordHeight: '3.5rem'
  }
  public signInForm: FormGroup | undefined;
  public captions: SignInCaptionModel | undefined;
  public errorCaption: ErrorCaptionModel | undefined;
  private readonly _passwordMinLength = this._environmentService.environmentConfig.passwordMinLength;
  private readonly _captionPath = {
    errorPath: 'auth.error',
    loginPath: 'auth.sign-in'
  }
  //#endregion

  //#region Lifecycle methods
  public ngOnInit(): void {
    this._initializeSignInForm();
    this._getCaptions();
  }
  //#endregion

  //#region Handler methods
  public onClickSubmitButtonEventHandler(): void {
    if (!this.signInForm) return;

    console.log(this.signInForm.value);
  }

  public onClickSignUpEventHandler(): void {
    console.log('sign up clicked!');
  }
  //#endregion

  //#region Main logics methods
  private _initializeSignInForm(): void {
    this.signInForm = this._fb.group({
      [this.formKeys.emailCtrl]: [null, [Validators.required, Validators.email]],
      [this.formKeys.passwordCtrl]: [null, [Validators.required, Validators.minLength(this._passwordMinLength), passwordStrengthValidator]],
      [this.formKeys.rememberCtrl]: [false]
    });
  }

  private _getCaptions(): void {
    forkJoin({
      errorsCaptions: this._translateService.get(this._captionPath.errorPath),
      UserLoginCaptions: this._translateService.get(this._captionPath.loginPath)
    }).subscribe({
      next: ({ errorsCaptions, UserLoginCaptions }) => {
        this.errorCaption = errorsCaptions;
        this.captions = UserLoginCaptions;
      },
      error: (err) => {
        console.error('Error fetching translations:', err);
      }
    });
  }
  //#endregion
}
