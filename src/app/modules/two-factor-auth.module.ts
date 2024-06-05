import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TwoFactorAuthTwoFactorAuthMainComponent } from '../components/two-factor-auth/two-factor-auth-main/two-factor-auth-two-factor-auth-main.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { UserService } from '../services/user.service';
import { UserRepository } from '../repositories/user.repository';
import { TwoFactorActionComponent } from '../components/two-factor-auth/two-factor-action/two-factor-action.component';

const routes: Routes = [
  { path: '', component: TwoFactorAuthTwoFactorAuthMainComponent }
];

@NgModule({
  declarations: [TwoFactorAuthTwoFactorAuthMainComponent, TwoFactorActionComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [UserService, UserRepository]
})
export class TwoFactorAuthModule { }
