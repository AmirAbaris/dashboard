import { Component, input, output } from '@angular/core';
import { ProfileOverviewProfileInfoModel } from '../models/profile-overview-profile-info.model';
import { ProfileOverviewProfileInformationCaptionModel } from '../models/caption-models/profile-overview-profile-information.caption.model';

@Component({
  selector: 'app-profile-overview-profile-information',
  templateUrl: './profile-overview-profile-information.component.html',
  styleUrl: './profile-overview-profile-information.component.scss'
})
export class ProfileOverviewProfileInformationComponent {
  //#region Properties
  public data = input.required<ProfileOverviewProfileInfoModel>();
  public caption = input.required<ProfileOverviewProfileInformationCaptionModel>();
  public clickEditEven = output<void>();
  //#endregion


  //#region Method handler
  public onClickEditEventHandler(): void {
    this.clickEditEven.emit();
  }
  //#endregion
}
