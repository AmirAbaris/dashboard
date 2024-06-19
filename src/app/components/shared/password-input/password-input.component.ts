import { PasswordInputCaptionModel } from './models/caption-models/password-input.caption.model';
import { NgIf, NgClass, NgStyle } from '@angular/common';
import { Component, OnInit, inject, input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    NgStyle,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss'
})
export class PasswordInputComponent implements OnInit {
  //#region Properties
  private readonly _translateService = inject(TranslateService);

  public form = input.required<FormGroup>();
  public controlName = input.required<string>();
  public marginHeight = input<string>('0rem');
  public passwordPlaceHolderCaption = input.required<string>();

  public readonly formKeys = {
    confirmNewPasswordCtrl: 'confirmNewPasswordCtrl'
  }
  public caption: PasswordInputCaptionModel | undefined;
  private readonly _captionPath = {
    passwordInputCaption: 'password-input'
  }
  //#endregion

  //#region Lifecycle methods
  public ngOnInit(): void {
    this._getCaptions();
  }
  //#endregion

  //#region Main logic methods
  private _getCaptions(): void {
    this._translateService.get(this._captionPath.passwordInputCaption).subscribe((caption) => {
      this.caption = caption;
    });
  }
  //#endregion
}
