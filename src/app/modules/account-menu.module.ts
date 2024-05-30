import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountMenuItemsComponent } from '../components/account-menu/account-menu-items/account-menu-items.component';
import { AccountMenuMainComponent } from '../components/account-menu/account-menu-main/account-menu-main.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  { path: '', component: AccountMenuMainComponent }
];

@NgModule({
  declarations: [
    AccountMenuMainComponent,
    AccountMenuItemsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MatIconModule
  ]
})
export class AccountMenuModule { }
