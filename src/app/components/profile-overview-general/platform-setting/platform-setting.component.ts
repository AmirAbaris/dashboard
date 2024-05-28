import { Component, input } from '@angular/core';
import { PlatformSettingCaptionModel } from '../models/caption-models/platform-setting.caption.model';

@Component({
  selector: 'app-platform-setting',
  templateUrl: './platform-setting.component.html',
  styleUrl: './platform-setting.component.scss'
})
export class PlatformSettingComponent {
  //#region Properties
  public caption = input.required<PlatformSettingCaptionModel>();
  //#endregion
}
