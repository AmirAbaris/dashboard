import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TwoFactorAuthTwoFactorAuthMainComponent } from '../components/two-factor-auth /two-factor-auth-two-factor-auth-main/two-factor-auth-two-factor-auth-main.component';

const routes: Routes = [
  { path: '', component: TwoFactorAuthTwoFactorAuthMainComponent }
];

@NgModule({
  declarations: [TwoFactorAuthTwoFactorAuthMainComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class TwoFactorAuthModule { }
