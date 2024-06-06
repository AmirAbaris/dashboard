import { Component, input, output } from '@angular/core';
import { AddProjectCaptionModel } from '../models/caption-models/add-project.caption.model';

@Component({
    selector: 'app-add-project-card',
    templateUrl: './add-project-card.component.html',
    styleUrl: './add-project-card.component.scss'
})
export class AddProjectCardComponent {
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