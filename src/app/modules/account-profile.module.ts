import { NgModule } from '@angular/core';
import { AccountProfileMainComponent } from '../components/account-profile/account-profile-main/account-profile-main.component';
import { RouterModule, Routes } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppService } from '../services/app.service';
import { AppRepository } from '../repositories/app-repository';

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
  providers: [AppService, AppRepository]
})
export class AccountProfileModule { }
