import { Component, OnInit, inject, input } from '@angular/core';
import { ParticipantModel } from '../models/participant.model';
import { ProjectItemModel } from '../models/project-item.model';
import { ProjectInputCaptionModel } from '../models/caption-models/project-input.caption.model';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-project',
  templateUrl: './profile-project.component.html',
  styleUrl: './profile-project.component.scss'
})
export class ProfileProjectComponent implements OnInit {
  //#region Properties
  private readonly _translateService = inject(TranslateService);
  private readonly _userService = inject(UserService);

  public participants: ParticipantModel[] | undefined;
  public projectItems: ProjectItemModel[] | undefined;

  public caption: ProjectInputCaptionModel | undefined;
  private readonly _projectCaptionPath = {
    projectCaption: 'profile.project',
    projectItemCaption: 'profile.project-item'
  }
  //#endregion

  //#region Lifecycle methods
  public ngOnInit(): void {
    this._getCaptions();
    this._getData();
  }
  //#endregion

  //#region Main logic methods
  private _getCaptions(): void {
    const projectCaption = this._translateService.get(this._projectCaptionPath.projectCaption);
    const projectItemCaption = this._translateService.get(this._projectCaptionPath.projectItemCaption);

    forkJoin([projectCaption, projectItemCaption]).subscribe(([projectCaptionData, projectItemCaptionData]) => {
      this.caption = {
        projectCaption: projectCaptionData,
        projectItemCaption: projectItemCaptionData
      }
    });
  }

  private _getData(): void {
    const projectItem = this._userService.getProjectItem();
    const participant = this._userService.getParticipant();

    forkJoin([projectItem, participant]).subscribe(([projectItemData, participantData]) => {
      this.projectItems = projectItemData;
      this.participants = participantData;
    });
  }
  //#endregion
}