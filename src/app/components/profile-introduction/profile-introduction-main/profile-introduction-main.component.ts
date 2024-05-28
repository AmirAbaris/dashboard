import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ProfileModel } from '../models/profile.model';

@Component({
  selector: 'app-profile-introduction-main',
  templateUrl: './profile-introduction-main.component.html',
  styleUrl: './profile-introduction-main.component.scss'
})
export class ProfileIntroductionMainComponent implements OnInit {
  //#region Properties
  private readonly _userService = inject(UserService);

  public profileData: ProfileModel | undefined;
  //#endregion

  //#region Lifecycle methods
  public ngOnInit(): void {
    this._getProfile();
  }
  //#endregion

  //#region Main logic methods
  private _getProfile(): void {
    this._userService.getProfile().subscribe({
      next: (data) => {
        this.profileData = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  //#endregion
}