import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TwoFactorAuthTwoFactorAuthMainComponent } from '../components/two-factor-auth/two-factor-auth-main/two-factor-auth-two-factor-auth-main.component';
import { AppService } from '../services/app.service';
import { AppRepository } from '../repositories/app-repository';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { UserService } from '../services/user.service';
import { UserRepository } from '../repositories/user.repository';

const routes: Routes = [
  { path: '', component: TwoFactorAuthTwoFactorAuthMainComponent }
];

@NgModule({
  declarations: [TwoFactorAuthTwoFactorAuthMainComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [UserService, UserRepository]
})
export class TwoFactorAuthModule { }
