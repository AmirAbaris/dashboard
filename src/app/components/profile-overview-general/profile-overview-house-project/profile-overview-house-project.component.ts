import { Component, input, output } from '@angular/core';
import { HouseProjectInputCaptionModel } from '../../profile-overview-general/models/caption-models/house-project-input.caption.model';
import { HouseProjectModel } from '../../profile-overview-general/models/house-project.model';

@Component({
  selector: 'app-profile-overview-house-project',
  templateUrl: './profile-overview-house-project.component.html',
  styleUrl: './profile-overview-house-project.component.scss'
})
export class ProfileOverviewHouseProjectComponent {
  //#region Properties
  public caption = input.required<HouseProjectInputCaptionModel>();
  public data = input.required<HouseProjectModel>();

  public clickNewProjectButtonEvent = output<void>();
  public clickHouseProjectButtonEvent = output<string>();
  //#endregion

  //#region Handler methods
  public onClickNewProjectButtonEventHandler(): void {
    this.clickNewProjectButtonEvent.emit();
  }

  public onClickHouseProjectButtonEventHandler(id: string): void {
    this.clickHouseProjectButtonEvent.emit(id);
  }
  //#endregion
}
