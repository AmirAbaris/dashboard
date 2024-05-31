import { Component, input, output } from '@angular/core';
import { NewHouseProjectCaptionModel } from '../models/caption-models/new-house-project.caption.model';

@Component({
  selector: 'app-new-house-project',
  templateUrl: './new-house-project.component.html',
  styleUrl: './new-house-project.component.scss'
})
export class NewHouseProjectComponent {
  //#region Properties
  public caption = input.required<NewHouseProjectCaptionModel>();
  public clickAddCardEvent = output<void>();
  //#endregion

  //#region Handler methods
  public onClickAddCardEventHandler(): void {
    this.clickAddCardEvent.emit();
  }
  //#endregion
}
