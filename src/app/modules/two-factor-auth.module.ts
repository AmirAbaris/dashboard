import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TwoFactorAuthTwoFactorAuthMainComponent } from '../components/two-factor-auth/two-factor-auth-main/two-factor-auth-two-factor-auth-main.component';
import { TwoFactorActionComponent } from '../components/two-factor-auth/two-factor-action/two-factor-action.component';
import { AppService } from '../services/app.service';
import { AppRepository } from '../repositories/app-repository';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

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
  providers: [AppService, AppRepository]
})
export class TwoFactorAuthModule { }
