import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AccountProfileMainComponent } from '../components/account-profile/account-profile-main/account-profile-main.component';
import { NgOptimizedImage } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UserRepository } from '../repositories/user.repository';
import { UserService } from '../services/user.service';
import { AccountSettingMenuItemsComponent } from '../components/account-setting-main/account-setting-menu-items/account-setting-menu-items.component';
import { AccountSettingMainComponent } from '../components/account-setting-main/account-setting-main/account-setting-main.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AccountSettingMainComponent,
    children: [
      {
        path: 'profile',
        component: AccountProfileMainComponent
      },
      {
        path: 'change-password',
        loadChildren: () => import('./account-change-password.module').then(m => m.AccountChangePasswordModule)
      },
      {
        path: '2fa',
        loadChildren: () => import('./two-factor-auth.module').then(m => m.TwoFactorAuthModule)
      }
    ]
  },
];

@NgModule({
  declarations: [
    AccountSettingMainComponent,
    AccountSettingMenuItemsComponent,
    AccountProfileMainComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MatIconModule,
    NgOptimizedImage,
    MatSlideToggleModule
  ],
  providers: [UserRepository, UserService]
})
export class AccountSettingModule { }
