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
  public data = input.required<HouseProjectModel[]>();

  public clickAddCardEvent = output<void>();
  public clickItemEvent = output<string>();
  //#endregion

  //#region Handler methods
  public onClickAddCardEventHandler(): void {
    this.clickAddCardEvent.emit();
  }

  public onClickItemEventHandler(id: string): void {
    this.clickItemEvent.emit(id);
  }
  //#endregion
}
