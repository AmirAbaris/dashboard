import { Component, input, output } from '@angular/core';
import { AddProjectCaptionModel } from '../models/caption-models/add-project.caption.model';

@Component({
    selector: 'app-profile-project-new',
    templateUrl: './profile-project-new.component.html',
    styleUrl: './profile-project-new.component.scss'
})
export class ProfileProjectNewComponent {
    //#region Properties
    public caption = input.required<AddProjectCaptionModel>();
    public clickCardEvent = output<void>();
    //#endregion

    //#region Handler methods
    public onClickCardEventHandler(): void {
        this.clickCardEvent.emit();
    }
    //#endregion
}