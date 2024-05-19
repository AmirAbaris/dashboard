import { NgModule } from '@angular/core';
import { SignInComponent } from '../components/auth/sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgOptimizedImage } from '@angular/common';

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
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    NgOptimizedImage
  ]
})
export class AuthModule { }
