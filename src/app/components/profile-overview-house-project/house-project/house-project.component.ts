import { Component, input, output } from '@angular/core';
import { HouseProjectModel } from '../models/house-project.model';
import { HouseProjectInputCaptionModel } from '../models/caption-models/house-project-input.caption.model';

@Component({
  selector: 'app-house-project',
  templateUrl: './house-project.component.html',
  styleUrl: './house-project.component.scss'
})
export class HouseProjectComponent {
  //#region Properties
  public data = input.required<HouseProjectModel[]>();
  public caption = input.required<HouseProjectInputCaptionModel>();
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
