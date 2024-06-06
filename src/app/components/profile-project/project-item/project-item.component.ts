import { Component, input } from '@angular/core';
import { ProjectItemModel } from '../models/project-item.model';
import { ProjectItemCaptionModel } from '../models/caption-models/project-item.caption.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss'
})
export class ProjectItemComponent {
  //#region Properties
  public data = input.required<ProjectItemModel>();
  public caption = input.required<ProjectItemCaptionModel>();
  //#endregion
}