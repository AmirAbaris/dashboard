import { NgModule } from '@angular/core';
import { SignInComponent } from '../components/auth/sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent }
];

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthModule { }
