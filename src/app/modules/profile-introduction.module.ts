import { NgModule } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ProfileIntroductionMainComponent } from '../components/profile-introduction/profile-introduction-main/profile-introduction-main.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProfileIntroductionMainComponent
  }
];


@NgModule({
  declarations: [ProfileIntroductionMainComponent],
  imports: [NgOptimizedImage,
    RouterModule.forChild(routes)
  ],
  exports: [ProfileIntroductionMainComponent]
})
export class ProfileIntroductionModule { }
