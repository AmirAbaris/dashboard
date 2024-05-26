import { Component, OnInit, inject } from '@angular/core';
import { ProjectCaptionModel } from '../models/caption-models/project.caption.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrl: './profile-main.component.scss'
})
export class ProfileMainComponent implements OnInit {
  //#region Properties
  private readonly _translateService = inject(TranslateService);
  public projectCaption: ProjectCaptionModel | undefined;
  //#endregion

  //#region Lifecycle methods
  public ngOnInit(): void {
    this._getCaptions();
  }
  //#endregion

  //#region Main logic methods
  private _getCaptions(): void {
    this._translateService.get('profile.project').subscribe((caption) => {
      this.projectCaption = caption;
    });
  }
  //#endregion
}