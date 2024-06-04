import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProfileOverviewPlatformSettingCaptionModel } from '../models/caption-models/profile-overview-platform-setting.caption.model';
import { forkJoin } from 'rxjs';
import { ProfileOverviewProfileInformationCaptionModel } from '../models/caption-models/profile-overview-profile-information.caption.model';
import { ProfileOverviewConversationItemModel } from '../models/profile-overview-conversation-item.model';
import { ProfileOverviewConversationInputCaptionModel } from '../models/caption-models/profile-overview-conversation-input.caption.model';
import { ProfileOverviewProfileInfoModel } from '../models/profile-overview-profile-info.model';
import { UserService } from '../../../services/user.service';
import { HouseProjectInputCaptionModel } from '../models/caption-models/house-project-input.caption.model';
import { HouseProjectModel } from '../models/house-project.model';

@Component({
  selector: 'app-profile-overview-general-main',
  templateUrl: './profile-overview-general-main.component.html',
  styleUrl: './profile-overview-general-main.component.scss'
})
export class ProfileOverviewGeneralMainComponent implements OnInit {
  //#region Properties
  private readonly _translateService = inject(TranslateService);
  private readonly _userService = inject(UserService);

  public profileInfo: ProfileOverviewProfileInfoModel | undefined;
  public conversationItems: ProfileOverviewConversationItemModel[] | undefined;
  public houseProject: HouseProjectModel[] | undefined;
  public platformSettingCaption: ProfileOverviewPlatformSettingCaptionModel | undefined;
  public profileInfoCaption: ProfileOverviewProfileInformationCaptionModel | undefined;
  public conversationInputCaption: ProfileOverviewConversationInputCaptionModel | undefined;
  public houseProjectInputCaption: HouseProjectInputCaptionModel | undefined;
  private readonly _captionPath = {
    platformSettingCaption: 'profile-overview-general.profile-overview-platform-setting',
    profileInfoCaption: 'profile-overview-general.profile-overview-profile-information',
    conversationCaption: 'profile-overview-general.profile-overview-conversation',
    conversationItemCaption: 'profile-overview-general.profile-overview-conversation-item',
    houseProjectCaption: 'profile-overview-general.profile-overview-house-project',
    houseProjectItemCaption: 'profile-overview-general.house-project-item',
    newHouseProjectCaption: 'profile-overview-general.new-house-project'
  }
  //#endregion

  //#region Lifecycle methods
  public ngOnInit(): void {
    this._getCaption();
    this._getData();
  }
  //#endregion

  //#region Handler methods
  public onClickReplyEventHandler(id: string): void {
    console.log('reply item clicked with id of:', id);
  }

  public onClickEditEventHandler(): void {
    console.log('profile edit clicked');
  }

  public onClickAddCardEventHandler(): void {
    console.log('add button clicked');
  }

  public onClickItemEventHandler(id: string): void {
    console.log('item id:', id);
  }
  //#endregion

  //#region Main logic methods
  private _getCaption(): void {
    const platformSettingCaption = this._translateService.get(this._captionPath.platformSettingCaption);
    const profileInfoCaption = this._translateService.get(this._captionPath.profileInfoCaption);
    const conversationCaption = this._translateService.get(this._captionPath.conversationCaption);
    const conversationItemCaption = this._translateService.get(this._captionPath.conversationItemCaption);
    const houseProjectCaption = this._translateService.get(this._captionPath.houseProjectCaption);
    const houseProjectItemCaption = this._translateService.get(this._captionPath.houseProjectItemCaption);
    const newHouseProjectCaption = this._translateService.get(this._captionPath.newHouseProjectCaption);

    forkJoin([platformSettingCaption, profileInfoCaption, conversationCaption,
      conversationItemCaption, houseProjectCaption, houseProjectItemCaption, newHouseProjectCaption])
      .subscribe(([platformSettingCaptionData, profileInfoCaptionData, conversationCaptionData,
        conversationItemCaptionData, houseProjectCaptionData, houseProjectItemCaptionData, newHouseProjectCaptionData]) => {
        this.platformSettingCaption = platformSettingCaptionData;
        this.profileInfoCaption = profileInfoCaptionData;
        this.conversationInputCaption = {
          conversationCaption: conversationCaptionData,
          conversationItemCaption: conversationItemCaptionData
        }
        this.houseProjectInputCaption = {
          houseProjectCaption: houseProjectCaptionData,
          houseProjectItemCaption: houseProjectItemCaptionData,
          newHouseProjectCaption: newHouseProjectCaptionData
        }
      })

    this._translateService.get(this._captionPath.platformSettingCaption).subscribe((caption) => {
      this.platformSettingCaption = caption;
    });
  }

  private _getData(): void {
    const profile = this._userService.getProfileInfoItem();
    const conversationItems = this._userService.getConversationItems();
    const houseProject = this._userService.getHouseProjectItems();

    forkJoin([profile, conversationItems, houseProject]).subscribe(([profileData, conversationItemData, houseProjectData]) => {
      this.profileInfo = profileData;
      this.conversationItems = conversationItemData;
      this.houseProject = houseProjectData;
    });
  }
  //#endregion
}
