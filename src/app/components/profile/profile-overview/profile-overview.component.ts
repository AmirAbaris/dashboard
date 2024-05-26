import { Component, OnInit, inject } from '@angular/core';
import { ProfileModel } from '../models/profile.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-profile-overview',
  templateUrl: './profile-overview.component.html',
  styleUrl: './profile-overview.component.scss'
})
export class ProfileOverviewComponent implements OnInit {
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