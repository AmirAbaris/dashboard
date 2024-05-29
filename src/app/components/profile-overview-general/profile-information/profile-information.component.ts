import { Component, input, output } from '@angular/core';
import { ProfileModel } from '../models/profile.model';
import { ProfileInformationCaptionModel } from '../models/caption-models/profile-information.caption.model';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrl: './profile-information.component.scss'
})
export class ProfileInformationComponent {
  //#region Properties
  public data = input.required<ProfileModel>();
  public caption = input.required<ProfileInformationCaptionModel>();
  public clickEditEven = output<void>();
  //#endregion


  //#region Method handler
  public onClickEditEventHandler(): void {
    this.clickEditEven.emit();
  }
  //#endregion
}
