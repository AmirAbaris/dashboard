import { Component, input, output } from '@angular/core';
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

    public actionMenuButtonEvent = output<void>();
    //#endregion

    //#region Handler methods
    public onClickFirstActionButtonMenuEventHandler(): void {
        console.log('first action button clicked!');
        this.actionMenuButtonEvent.emit();
    }

    public onClickSecondActionButtonMenuEventHandler(): void {
        console.log('second action button clicked!');
        this.actionMenuButtonEvent.emit();
    }

    public onClickThirdActionButtonMenuEventHandler(): void {
        console.log('third action button clicked!');
        this.actionMenuButtonEvent.emit();
    }
    //#endregion
}