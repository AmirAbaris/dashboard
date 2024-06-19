import { Component, input, output } from '@angular/core';
import { HouseProjectItemCaptionModel } from '../models/caption-models/house-project-item.caption.model';
import { HouseProjectItemModel } from '../models/house-project-item.model';

@Component({
  selector: 'app-house-project-item',
  templateUrl: './house-project-item.component.html',
  styleUrl: './house-project-item.component.scss'
})
export class HouseProjectItemComponent {
  //#region Properties
  public data = input.required<HouseProjectItemModel>();
  public caption = input.required<HouseProjectItemCaptionModel>();
  public houseProjectCount = input.required<number>();
  public clickHouseProjectButtonEvent = output<string>();
  //#endregion

  //#region Handler methods
  public onClickHouseProjectButtonEventHandler(id: string): void {
    this.clickHouseProjectButtonEvent.emit(id);
  }
  //#endregion
}