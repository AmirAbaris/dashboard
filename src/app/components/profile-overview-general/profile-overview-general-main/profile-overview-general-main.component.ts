import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PlatformSettingCaptionModel } from '../models/caption-models/platform-setting.caption.model';
import { forkJoin } from 'rxjs';
import { ProfileInformationCaptionModel } from '../models/caption-models/profile-information.caption.model';
import { ConversationItemModel } from '../models/conversation-item.model';
import { ConversationInputCaptionModel } from '../models/caption-models/conversation-input.caption.model';
import { ProfileInfoModel } from '../models/profile-info.model';
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

  public profileInfo: ProfileInfoModel | undefined;
  public conversationItems: ConversationItemModel[] | undefined;
  public platformSettingCaption: PlatformSettingCaptionModel | undefined;
  public profileInfoCaption: ProfileInformationCaptionModel | undefined;
  public conversationInputCaption: ConversationInputCaptionModel | undefined;
  private readonly _captionPath = {
    platformSettingCaption: 'profile-overview-general.platform-setting',
    profileInfoCaption: 'profile-overview-general.profile-information',
    conversationCaption: 'profile-overview-general.conversation',
    conversationItemCaption: 'profile-overview-general.conversation-item'
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
