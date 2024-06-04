import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';
import { AddProjectCaptionModel } from '../models/caption-models/add-project.caption.model';
import { ProjectInputCaptionModel } from '../models/caption-models/project-input.caption.model';
import { ProjectItemModel } from '../models/project-item.model';
import { AppService } from '../../../services/app.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-project-main',
  templateUrl: './profile-project-main.component.html',
  styleUrl: './profile-project-main.component.scss'
})
export class ProfileProjectMainComponent implements OnInit {
  //#region Properties
  private readonly _translateService = inject(TranslateService);
  private readonly _userService = inject(UserService);

  public projectItems: ProjectItemModel[] | undefined;

  public caption: ProjectInputCaptionModel | undefined;
  public addProjectCaption: AddProjectCaptionModel | undefined;
  private readonly _projectCaptionPath = {
    project: 'profile-project.project',
    projectItem: 'profile-project.project-item',
    addProject: 'profile-project.add-project-card'
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
    this._userService.getProjectItems().subscribe((projectItemData) => {
      this.projectItems = projectItemData;
    });
  }
  //#endregion
}