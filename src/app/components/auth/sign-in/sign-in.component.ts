import { Component, OnInit, inject } from '@angular/core';
import { SignInCaptionModel } from '../models/caption-models/sign-in.caption.model';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginModel } from '../models/account/user-login.model';
import { ErrorCaptionModel } from '../models/caption-models/error.caption.model';
import { environment } from '../../../../environments/environment.development';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit {
  //#region Properties
  private readonly _translateService = inject(TranslateService);
  private readonly _fb = inject(FormBuilder);

  public signInForm: FormGroup | undefined;
  public captions: SignInCaptionModel | undefined;
  public errorCaption: ErrorCaptionModel | undefined;
  public readonly formKeys = {
    emailCtrl: 'emailCtrl',
    passwordCtrl: 'passwordCtrl',
    rememberCtrl: 'rememberCtrl'
  }
  private readonly _PasswordMinLength = environment.passwordMinLength;
  //#endregion

  //#region Lifecycle methods
  public ngOnInit(): void {
    this._initializeSignInForm();
    this._getCaptions();
  }
  //#endregion

  //#region Handler methods
  public onClickSubmitButtonEventHandler(): void {
    // create userInput object from form values
    const userInput = this._convertSignInFormValuesToUserLoginModel();

    // check if userInput is not undefined
    if (!userInput) return;

    // log the userInput for debugging or development purposes
    console.log(userInput);
  }

  public onClickSignUpEventHandler(): void {
    console.log('sign up clicked!');
  }
  //#endregion

  //#region Main logics methods
  private _initializeSignInForm(): void {
    this.signInForm = this._fb.group({
      [this.formKeys.emailCtrl]: [null, [Validators.required, Validators.email]],
      [this.formKeys.passwordCtrl]: [null, [Validators.required, Validators.minLength(this._PasswordMinLength)]],
      [this.formKeys.rememberCtrl]: [false]
    });
  }

  private _getCaptions(): void {
    forkJoin({
      errorsCaptions: this._translateService.get('auth.error'),
      UserLoginCaptions: this._translateService.get('auth.sign-in')
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

  //#region Helper methods
  private _convertSignInFormValuesToUserLoginModel(): UserLoginModel | undefined {
    // guard to make sure we have signInForm values
    if (!this.signInForm) return;

    return {
      email: this.signInForm.value.emailCtrl,
      password: this.signInForm.value.passwordCtrl,
      shouldRemember: this.signInForm.value.rememberCtrl
    }
  }
  //#endregion
}
