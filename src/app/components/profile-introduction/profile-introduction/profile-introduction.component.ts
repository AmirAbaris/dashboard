import { Component, OnInit, inject } from '@angular/core';
import { ProfileModel } from '../models/profile.model';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-profile-introduction',
  templateUrl: './profile-introduction.component.html',
  styleUrl: './profile-introduction.component.scss'
})
export class ProfileIntroductionComponent implements OnInit {
  //#region Properties
  private readonly _appService = inject(AppService);

  public profileData: ProfileModel | undefined;
  //#endregion

  //#region Lifecycle methods
  public ngOnInit(): void {
    this._getProfile();
  }
  //#endregion

  //#region Main logic methods
  private _getProfile(): void {
    this._appService.getProfileItem().subscribe({
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