import { Component, OnInit, inject } from '@angular/core';
import { HouseProjectInputCaptionModel } from '../models/caption-models/house-project-input.caption.model';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';
import { HouseProjectModel } from '../models/house-project.model';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-profile-overview-house-project-main',
  templateUrl: './profile-overview-house-project-main.component.html',
  styleUrl: './profile-overview-house-project-main.component.scss'
})
export class ProfileOverviewHouseProjectMainComponent implements OnInit {
  //#region Properties
  private readonly _translateService = inject(TranslateService);
  private readonly _appService = inject(AppService);

  public houseProject: HouseProjectModel[] | undefined;

  public houseProjectInputCaption: HouseProjectInputCaptionModel | undefined;
  private readonly _captionPath = {
    houseProjectCaption: 'profile-overview-project-house-project',
    houseProjectItemCaption: 'profile-overview-house-project.house-project-item',
    newHouseProjectCaption: 'profile-overview-house-project.new-house-project'
  }
  //#endregion

  //#region Lifecycle methods
  ngOnInit(): void {
    this._getCaption();
    this._getData();
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
    const houseProjectCaption = this._translateService.get(this._captionPath.houseProjectCaption);
    const houseProjectItemCaption = this._translateService.get(this._captionPath.houseProjectItemCaption);
    const newHouseProjectCaption = this._translateService.get(this._captionPath.newHouseProjectCaption);

    forkJoin([houseProjectCaption, houseProjectItemCaption, newHouseProjectCaption])
      .subscribe(([houseProjectCaptionData, houseProjectItemCaptionData, newHouseProjectCaptionData]) => {
        this.houseProjectInputCaption = {
          houseProjectCaption: houseProjectCaptionData,
          houseProjectItemCaption: houseProjectItemCaptionData,
          newHouseProjectCaption: newHouseProjectCaptionData
        }
      });
  }

  private _getData(): void {
    this._appService.getHouseProjectItems().subscribe((data) => {
      this.houseProject = data;
    });
  }
  //#endregion
}
