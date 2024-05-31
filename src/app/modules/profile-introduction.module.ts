import { NgModule } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ProfileIntroductionMainComponent } from '../components/profile-introduction/profile-introduction-main/profile-introduction-main.component';

@NgModule({
  declarations: [ProfileIntroductionMainComponent],
  imports: [
    NgOptimizedImage
  ],
  exports: [
    ProfileIntroductionMainComponent
  ]
})
export class ProfileIntroductionModule { }
