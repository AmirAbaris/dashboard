import { NgModule } from '@angular/core';
import { UserService } from '../services/user.service';
import { AccountProfileMainComponent } from '../components/account-profile/account-profile-main/account-profile-main.component';
import { RouterModule, Routes } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const routes: Routes = [
  { path: '', component: AccountProfileMainComponent }
];

@NgModule({
  declarations: [AccountProfileMainComponent],
  imports: [
    NgOptimizedImage,
    MatSlideToggleModule,
    RouterModule.forChild(routes),
  ],
  providers: [UserService]
})
export class AccountProfileModule { }
