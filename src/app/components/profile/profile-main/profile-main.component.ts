import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProjectItemModel } from '../models/project-item.model';
import { ParticipantModel } from '../models/participant.model';
import { forkJoin } from 'rxjs';
import { UserService } from '../../../services/user.service';
import { ProjectInputCaptionModel } from '../models/caption-models/project-input.caption.model';

@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrl: './profile-main.component.scss'
})
export class ProfileMainComponent implements OnInit {
  //#region Properties
  private readonly _translateService = inject(TranslateService);
  private readonly _userService = inject(UserService);

  public participants: ParticipantModel[] | undefined;
  public projectItems: ProjectItemModel[] | undefined;

  public projectInputCaption: ProjectInputCaptionModel | undefined;
  private readonly _profileCaptionPath = {
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
    const projectCaption = this._translateService.get(this._profileCaptionPath.projectCaption);
    const projectItemCaption = this._translateService.get(this._profileCaptionPath.projectItemCaption);

    forkJoin([projectCaption, projectItemCaption]).subscribe(([projectCaptionData, projectItemCaptionData]) => {
      this.projectInputCaption = {
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