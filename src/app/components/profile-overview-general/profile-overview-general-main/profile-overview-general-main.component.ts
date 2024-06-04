import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProfileOverviewPlatformSettingCaptionModel } from '../models/caption-models/profile-overview-platform-setting.caption.model';
import { forkJoin } from 'rxjs';
import { ProfileOverviewProfileInformationCaptionModel } from '../models/caption-models/profile-overview-profile-information.caption.model';
import { ProfileOverviewConversationItemModel } from '../models/profile-overview-conversation-item.model';
import { ProfileOverviewConversationInputCaptionModel } from '../models/caption-models/profile-overview-conversation-input.caption.model';
import { ProfileOverviewProfileInfoModel } from '../models/profile-overview-profile-info.model';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-profile-overview-general-main',
  templateUrl: './profile-overview-general-main.component.html',
  styleUrl: './profile-overview-general-main.component.scss'
})
export class ProfileOverviewGeneralMainComponent implements OnInit {
  //#region Properties
  private readonly _translateService = inject(TranslateService);
  private readonly _appService = inject(AppService);

  public profileInfo: ProfileOverviewProfileInfoModel | undefined;
  public conversationItems: ProfileOverviewConversationItemModel[] | undefined;
  public platformSettingCaption: ProfileOverviewPlatformSettingCaptionModel | undefined;
  public profileInfoCaption: ProfileOverviewProfileInformationCaptionModel | undefined;
  public conversationInputCaption: ProfileOverviewConversationInputCaptionModel | undefined;
  private readonly _captionPath = {
    platformSettingCaption: 'profile-overview-general.profile-overview-platform-setting',
    profileInfoCaption: 'profile-overview-general.profile-overview-profile-information',
    conversationCaption: 'profile-overview-general.profile-overview-conversation',
    conversationItemCaption: 'profile-overview-general.profile-overview-conversation-item'
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
  //#endregion

  //#region Main logic methods
  private _getCaption(): void {
    const platformSettingCaption = this._translateService.get(this._captionPath.platformSettingCaption);
    const profileInfoCaption = this._translateService.get(this._captionPath.profileInfoCaption);
    const conversationCaption = this._translateService.get(this._captionPath.conversationCaption);
    const conversationItemCaption = this._translateService.get(this._captionPath.conversationItemCaption);

    forkJoin([platformSettingCaption, profileInfoCaption, conversationCaption, conversationItemCaption])
      .subscribe(([platformSettingCaptionData, profileInfoCaptionData, conversationCaptionData, conversationItemCaptionData]) => {
        this.platformSettingCaption = platformSettingCaptionData;
        this.profileInfoCaption = profileInfoCaptionData;
        this.conversationInputCaption = {
          conversationCaption: conversationCaptionData,
          conversationItemCaption: conversationItemCaptionData
        };
      })

    this._translateService.get(this._captionPath.platformSettingCaption).subscribe((caption) => {
      this.platformSettingCaption = caption;
    });
  }

  private _getData(): void {
    const profile = this._appService.getProfileInfoItem();
    const conversationItems = this._appService.getConversationItems();

    forkJoin([profile, conversationItems]).subscribe(([profileData, conversationItemData]) => {
      this.profileInfo = profileData;
      this.conversationItems = conversationItemData;
    });
  }
  //#endregion
}
