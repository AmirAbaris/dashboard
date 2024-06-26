import { NgModule } from '@angular/core';
import { SignInComponent } from '../components/auth/sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { PasswordInputComponent } from '../components/shared/password-input/password-input.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent }
];

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    PasswordInputComponent,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatButtonModule,
    ReactiveFormsModule,
    UpperCasePipe,
    NgIf,
    NgOptimizedImage
  ]
})
export class AuthModule { }
