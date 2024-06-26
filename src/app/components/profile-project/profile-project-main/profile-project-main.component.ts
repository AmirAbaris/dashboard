import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';
import { UserService } from '../../../services/user.service';
import { AddProjectCaptionModel } from '../models/caption-models/add-project.caption.model';
import { ProjectInputCaptionModel } from '../models/caption-models/project-input.caption.model';
import { ProjectItemModel } from '../models/project-item.model';
import { ProfileService } from '../../../services/profile.service';

@Component({
    selector: 'app-project-main',
    templateUrl: './profile-project-main.component.html',
    styleUrl: './profile-project-main.component.scss'
})
export class ProfileProjectMainComponent implements OnInit {
    //#region Properties
    private readonly _translateService = inject(TranslateService);
    private readonly _profileService = inject(ProfileService);

    public projectItems: ProjectItemModel[] | undefined;

    public caption: ProjectInputCaptionModel | undefined;
    public newProjectCaption: AddProjectCaptionModel | undefined;
    private readonly _projectCaptionPath = {
        project: 'profile-project.project',
        projectItem: 'profile-project.profile-project-item',
        newProject: 'profile-project.profile-project-new'
    }
    //#endregion

    //#region Lifecycle methods
    public ngOnInit(): void {
        this._getCaptions();
        this._getData();
    }
    //#endregion

    //#region Handler methods
    public onClickActionMenuButtonEventHandler(): void {
        console.log('clicked');
    }

    public onClickProfileProjectNewButtonEventHandler(): void {
        console.log('new project clicked');
    }
    //#endregion

    //#region Main logic methods
    private _getCaptions(): void {
        const projectCaption = this._translateService.get(this._projectCaptionPath.project);
        const projectItemCaption = this._translateService.get(this._projectCaptionPath.projectItem);
        const newProjectCaption = this._translateService.get(this._projectCaptionPath.newProject);

        forkJoin([projectCaption, projectItemCaption, newProjectCaption]).subscribe(([projectCaptionData, projectItemCaptionData, addProjectCaptionData]) => {
            this.caption = {
                projectCaption: projectCaptionData,
                projectItemCaption: projectItemCaptionData
            }
            this.newProjectCaption = addProjectCaptionData;
        });
    }

    private _getData(): void {
        this._profileService.getProjectItems().subscribe((projectItemData) => {
            this.projectItems = projectItemData;
        });
    }
    //#endregion
}