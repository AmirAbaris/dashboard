import { Component, input, output } from '@angular/core';
import { NewHouseProjectCaptionModel } from '../models/caption-models/new-house-project.caption.model';

@Component({
  selector: 'app-profile-overview-new-house-project',
  templateUrl: './profile-overview-new-house-project.component.html',
  styleUrl: './profile-overview-new-house-project.component.scss'
})
export class ProfileOverviewNewHouseProjectComponent {
  //#region Properties
  public caption = input.required<NewHouseProjectCaptionModel>();
  public clickNewProjectButtonEvent = output<void>();
  //#endregion

  //#region Handler methods
  public onClickNewProjectButtonEventHandler(): void {
    this.clickNewProjectButtonEvent.emit();
  }
  //#endregion
}
