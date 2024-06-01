import { NgModule } from '@angular/core';
import { AccountMenuItemsComponent } from '../components/account-menu/account-menu-items/account-menu-items.component';
import { AccountMenuMainComponent } from '../components/account-menu/account-menu-main/account-menu-main.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AccountProfileComponent } from '../components/account-menu/account-profile/account-profile.component';
import { NgOptimizedImage } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


const routes: Routes = [
  {
    path: '',
    component: AccountMenuMainComponent,
    children: [
      {
        path: 'profile',
        component: AccountProfileComponent
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
  ]
})
export class AccountMenuModule { }
