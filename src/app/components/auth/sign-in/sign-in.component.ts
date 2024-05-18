import { Component, OnInit, inject, input } from '@angular/core';
import { SignInCaptionModel } from '../models/caption-models/sign-in.caption.model';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  // TODO: remove after PR confirmation
  // note: we will reive captions from input not this!
  public captions: SignInCaptionModel | undefined;
  private _signInForm: FormGroup | undefined;
  //#endregion

  //#region Lifecycle methods
  public ngOnInit(): void {
    // TODO: remove after PR confirmation
    this._translateService.get('auth.sign-in').subscribe((receivedCaptions) => {
      this.captions = receivedCaptions;
    });

    // TODO: move?
    this._signInForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  //#endregion
}
