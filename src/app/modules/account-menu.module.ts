import { NgModule } from '@angular/core';
import { AccountMenuItemsComponent } from '../components/account-menu/account-menu-items/account-menu-items.component';
import { AccountMenuMainComponent } from '../components/account-menu/account-menu-main/account-menu-main.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AccountProfileComponent } from '../components/account-menu/account-profile/account-profile.component';
import { NgOptimizedImage } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRepository } from '../repositories/app-repository';
import { AppService } from '../services/app.service';


const routes: Routes = [
  {
    path: '',
    component: AccountMenuMainComponent,
    children: [
      {
        path: 'profile',
        component: AccountProfileComponent
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
    AccountProfileComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MatIconModule,
    NgOptimizedImage,
    MatSlideToggleModule
  ],
  providers: [AppRepository, AppService]
})
export class AccountMenuModule { }
