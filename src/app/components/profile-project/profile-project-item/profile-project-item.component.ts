import { Component, input } from '@angular/core';
import { ProjectItemModel } from '../models/project-item.model';
import { ProjectItemCaptionModel } from '../models/caption-models/project-item.caption.model';

@Component({
    selector: 'app-profile-project-item',
    templateUrl: './profile-project-item.component.html',
    styleUrl: './profile-project-item.component.scss'
})
export class ProfileProjectItemComponent {
    //#region Properties
    public data = input.required<ProjectItemModel>();
    public caption = input.required<ProjectItemCaptionModel>();
    //#endregion
}