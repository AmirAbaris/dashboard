import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss'
})
export class PasswordInputComponent {
  //#region Properties
  public form = input.required<FormGroup>();
  public controlName = input.required<string>();
  public marginHeight = input<string>('0rem');

  public readonly formKeys = {
    confirmNewPasswordCtrl: 'confirmNewPasswordCtrl'
  }
  //#endregion
}
