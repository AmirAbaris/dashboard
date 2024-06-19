import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, forwardRef, input } from '@angular/core';
import { FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true
    }
  ],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss'
})
export class PasswordInputComponent {
  //#region Properties
  public form = input.required<FormGroup>();
  public controlName = input.required<string>();
  public marginHeight = input<string>('0rem');

  public readonly formKeys = {
    newPasswordCtrl: 'newPasswordCtrl',
    confirmNewPasswordCtrl: 'confirmNewPasswordCtrl'
  }
  //#endregion

  //#region Main logic methods
  public writeValue(value: any): void {
    if (this.form().get(this.controlName())) {
      this.form().get(this.controlName())?.setValue(value, { emitEvent: false });
    }
  }

  public registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.form().get(this.controlName())?.disable();
    } else {
      this.form().get(this.controlName())?.enable();
    }
  }

  public onInput(value: any): void {
    this._onChange(value);
    this._onTouched();
  }

  private _onChange: (value: any) => void = () => { };
  private _onTouched: () => void = () => { };
  //#endregion
}
