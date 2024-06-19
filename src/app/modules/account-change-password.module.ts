import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccountChangePasswordMainComponent } from '../components/account-change-password/account-change-password-main/account-change-password-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { PasswordInputComponent } from '../components/password-input/password-input.component';

const routes: Routes = [
  { path: '', component: AccountChangePasswordMainComponent }
];

@NgModule({
  declarations: [AccountChangePasswordMainComponent],
  imports: [
    PasswordInputComponent,
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class AccountChangePasswordModule { }
