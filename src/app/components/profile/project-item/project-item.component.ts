import { Component, input } from '@angular/core';
import { ProjectItemModel } from '../models/project-item.model';
import { ParticipantModel } from '../models/participant.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss'
})
export class ProjectItemComponent {
  //#region Properties
  public data = input.required<ProjectItemModel>();
  //#endregion
}