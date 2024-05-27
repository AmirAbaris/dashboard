import { Component, input } from '@angular/core';
import { ParticipantModel } from '../models/participant.model';
import { ProjectItemModel } from '../models/project-item.model';
import { ProjectInputCaptionModel } from '../models/caption-models/project-input.caption.model';

@Component({
  selector: 'app-project',
  templateUrl: './profile-project.component.html',
  styleUrl: './profile-project.component.scss'
})
export class ProfileProjectComponent {
  //#region Properties
  public caption = input.required<ProjectInputCaptionModel>();
  public projectItems = input.required<ProjectItemModel[]>();
  public participants = input.required<ParticipantModel[]>();
  //#endregion
}