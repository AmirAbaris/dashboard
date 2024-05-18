import { Component, OnInit, inject, input, output } from '@angular/core';
import { SignInCaptionModel } from '../models/caption-models/sign-in.caption.model';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginModel } from '../models/account/user-login.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit {
  //#region Properties
  private _translateService = inject(TranslateService);
  private _fb = inject(FormBuilder);
  // public captions = input.required<SignInCaptionModel>();

  public clickSubmitEvent = output<UserLoginModel>();
  public clickSignUpEvent = output<void>();

  // TODO: remove after PR confirmation
  // note: we will reive captions from input not this!
  public captions: SignInCaptionModel | undefined;

  public signInForm: FormGroup = this._fb.group({
    emailCtrl: [null, [Validators.required, Validators.email]],
    passwordCtrl: [null, [Validators.required, Validators.minLength(6)]],
    rememberCtrl: [false]
  });
  //#endregion

  //#region Lifecycle methods
  public ngOnInit(): void {
    // TODO: remove after PR confirmation
    this._translateService.get('auth.sign-in').subscribe((receivedCaptions) => {
      this.captions = receivedCaptions;
    });
  }
  //#endregion

  //#region Handler methods
  public onClickSubmitButtonEventHandler(): void {
    // create userInput object from form values
    const userInput: UserLoginModel = {
      email: this.signInForm.value.emailCtrl,
      password: this.signInForm.value.passwordCtrl,
      shouldRemember: this.signInForm.value.rememberCtrl
    }

    // emit the userInput to notify the parent component
    this.clickSubmitEvent.emit(userInput);

    // log the userInput for debugging or development purposes
    console.log(userInput);
  }

  public onClickSignUpEventHandler(): void {
    console.log('sign up clicked!');
    
    this.clickSignUpEvent.emit();
  }
  //#endregion
}
