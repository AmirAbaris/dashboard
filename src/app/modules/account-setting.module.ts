import { NgModule } from '@angular/core';
import { AccountMenuItemsComponent } from '../components/account-setting/account-menu-items/account-menu-items.component';
import { AccountMenuMainComponent } from '../components/account-setting/account-menu-main/account-menu-main.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AccountProfileMainComponent } from '../components/account-setting/account-profile-main/account-profile-main.component';
import { NgOptimizedImage } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UserRepository } from '../repositories/user.repository';
import { UserService } from '../services/user.service';


const routes: Routes = [
  {
    path: '',
    component: AccountMenuMainComponent,
    children: [
      {
        path: 'profile',
        component: AccountProfileMainComponent
      },
      {
        path: 'change-password',
        loadChildren: () => import('./account-change-password.module').then(m => m.AccountChangePasswordModule)
      }
    ]
  },
];

@NgModule({
  declarations: [
    AccountMenuMainComponent,
    AccountMenuItemsComponent,
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
