import { Component, input, output } from '@angular/core';
import { NewProjectCaptionModel } from '../models/caption-models/new-project.caption.model';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrl: './new-project.component.scss'
})
export class NewProjectComponent {
  //#region Properties
  public caption = input.required<NewProjectCaptionModel>();
  public clickAddCardEvent = output<void>();
  //#endregion

  //#region Handler methods
  public onClickAddCardEventHandler(): void {
    this.clickAddCardEvent.emit();
  }
  //#endregion
}
