import { Component, input, output } from '@angular/core';
import { ProfileInfoModel } from '../models/profile-info.model';
import { ProfileInformationCaptionModel } from '../models/caption-models/profile-information.caption.model';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrl: './profile-information.component.scss'
})
export class ProfileInformationComponent {
  //#region Properties
  public data = input.required<ProfileInfoModel>();
  public caption = input.required<ProfileInformationCaptionModel>();
  public clickEditEven = output<void>();
  //#endregion


  //#region Method handler
  public onClickEditEventHandler(): void {
    this.clickEditEven.emit();
  }
  //#endregion
}
