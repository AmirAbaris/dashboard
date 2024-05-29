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
  public clickEvent = output<string>();
  //#endregion
}
