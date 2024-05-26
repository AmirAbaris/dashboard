import { Component, input } from '@angular/core';
import { ProjectCaptionModel } from '../models/caption-models/project.caption.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  //#region Properties
  public caption = input.required<ProjectCaptionModel>();
  //#endregion
}
