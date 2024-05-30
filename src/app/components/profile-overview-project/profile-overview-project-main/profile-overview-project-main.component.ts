import { Component, OnInit, inject } from '@angular/core';
import { ProjectInputCaptionModel } from '../models/caption-models/project-input.caption.model';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';
import { UserService } from '../../../services/user.service';
import { ProjectModel } from '../models/project.model';

@Component({
  selector: 'app-profile-overview-project-main',
  templateUrl: './profile-overview-project-main.component.html',
  styleUrl: './profile-overview-project-main.component.scss'
})
export class ProfileOverviewProjectMainComponent implements OnInit {
  //#region Properties
  private readonly _translateService = inject(TranslateService);
  private readonly _userService = inject(UserService);

  public project: ProjectModel[] | undefined;

  public projectInputCaption: ProjectInputCaptionModel | undefined;
  private readonly _captionPath = {
    projectCaption: 'profile-overview-project.project',
    projectItemCaption: 'profile-overview-project.project-item',
    newProjectCaption: 'profile-overview-project.new-project'
  }
  //#endregion

  //#region Lifecycle methods
  ngOnInit(): void {
    this._getCaption();
    this._getData();
    console.log(this.project);
  }
  //#endregion

  //#region Handler methods
  public onClickAddCardEventHandler(): void {
    console.log('add button clicked');
  }

  public onClickItemEventHandler(id: string): void {
    console.log('item id:', id);
  }
  //#endregion

  //#region Main logic methods
  private _getCaption(): void {
    const projectCaption = this._translateService.get(this._captionPath.projectCaption);
    const projectItemCaption = this._translateService.get(this._captionPath.projectItemCaption);
    const newProjectCaption = this._translateService.get(this._captionPath.newProjectCaption);

    forkJoin([projectCaption, projectItemCaption, newProjectCaption])
      .subscribe(([projectCaptionData, projectItemCaptionData, newProjectCaptionData]) => {
        this.projectInputCaption = {
          projectCaption: projectCaptionData,
          projectItemCaption: projectItemCaptionData,
          newProjectCaption: newProjectCaptionData
        }
      });
  }

  private _getData(): void {
    this._userService.getProject().subscribe((data) => {
      this.project = data;
    });
  }
  //#endregion
}
