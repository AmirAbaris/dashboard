import { Component, OnInit, inject, input } from '@angular/core';
import { ProjectItemModel } from '../models/project-item.model';
import { ProjectInputCaptionModel } from '../models/caption-models/project-input.caption.model';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';
import { UserService } from '../../../services/user.service';
import { AddProjectCaptionModel } from '../models/caption-models/add-project.caption.model';

@Component({
  selector: 'app-project',
  templateUrl: './profile-project.component.html',
  styleUrl: './profile-project.component.scss'
})
export class ProfileProjectComponent implements OnInit {
  //#region Properties
  private readonly _translateService = inject(TranslateService);
  private readonly _userService = inject(UserService);

  public projectItems: ProjectItemModel[] | undefined;

  public caption: ProjectInputCaptionModel | undefined;
  public addProjectCaption: AddProjectCaptionModel | undefined;
  private readonly _projectCaptionPath = {
    project: 'profile.project',
    projectItem: 'profile.project-item',
    addProject: 'profile.add-project-card'
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
    const projectCaption = this._translateService.get(this._projectCaptionPath.project);
    const projectItemCaption = this._translateService.get(this._projectCaptionPath.projectItem);
    const addProjectCaption = this._translateService.get(this._projectCaptionPath.addProject);

    forkJoin([projectCaption, projectItemCaption, addProjectCaption]).subscribe(([projectCaptionData, projectItemCaptionData, addProjectCaptionData]) => {
      this.caption = {
        projectCaption: projectCaptionData,
        projectItemCaption: projectItemCaptionData
      }
      this.addProjectCaption = addProjectCaptionData;
    });
  }

  private _getData(): void {
    const projectItem = this._userService.getProjectItem().subscribe((projectItemData) => {
      this.projectItems = projectItemData;
    });
  }
  //#endregion
}