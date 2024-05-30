import { Component, input, output } from '@angular/core';
import { ProjectModel } from '../models/project.model';
import { ProjectInputCaptionModel } from '../models/caption-models/project-input.caption.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  //#region Properties
  public data = input.required<ProjectModel[]>();
  public caption = input.required<ProjectInputCaptionModel>();
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
