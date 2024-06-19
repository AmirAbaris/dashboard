import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit, inject, input } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, FormsModule, NG_VALUE_ACCESSOR, NgControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { passwordMatchValidator } from '../../account-change-password/helpers/password-match-validator';
import { passwordStrengthValidator } from '../../account-change-password/helpers/password-strength-validator';
import { EnvironmentService } from '../../../services/environment.service';

@Component({
  selector: 'app-password-input-value-accessor',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    NgStyle,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PasswordInputValueAccessorComponent,
      multi: true
    }
  ],
  templateUrl: './password-input-value-accessor.component.html',
  styleUrl: './password-input-value-accessor.component.scss'
})
// PasswordInputValueAccessorComponent is a custom form control that implements the ControlValueAccessor interface.
// It allows the component to be used as a form control, allowing it to be used in a form and receive input like a regular input field.
// I understand the concept but do not have enough time to complete this feature.
export class PasswordInputValueAccessorComponent implements ControlValueAccessor, OnInit {
  //#region Properties
  private readonly _environmentService = inject(EnvironmentService);
  private readonly _fb = inject(FormBuilder);

  public marginHeight = input<string>('0rem');

  // public readonly formKeys = {
  //   currentPasswordCtrl: 'currentPasswordCtrl',
  //   newPasswordCtrl: 'newPasswordCtrl',
  //   confirmNewPasswordCtrl: 'confirmNewPasswordCtrl'
  // }
  public formControl: FormControl | undefined;
  private readonly _passwordMinLength = this._environmentService.environmentConfig.passwordMinLength;
  //#endregion

  //#region Lifecycle methods
  public ngOnInit(): void {
    this._initializeForm();
  }
  //#endregion

  //#region Main logic methods
  public writeValue(value: unknown): void {
    if (value !== undefined && this.formControl) {
      this.formControl.setValue(value);
    }
  }

  public registerOnChange(fn: (value: string) => void): void {
    if (!this.formControl) return;

    this.formControl.valueChanges.subscribe(fn);
  }

  public registerOnTouched(fn: unknown): void {
    if (!this.formControl) return;
  }

  private _initializeForm(): void {
    this.formControl = this._fb.control(null, [
      Validators.required,
      Validators.minLength(this._passwordMinLength),
      passwordStrengthValidator
    ]);
  }
  //#endregion
}