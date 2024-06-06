import { Component, input, output } from '@angular/core';
import { ProfileOverviewConversationItemCaptionModel } from '../models/caption-models/profile-overview-conversation-item.caption.model';
import { ProfileOverviewConversationItemModel } from '../models/profile-overview-conversation-item.model';

@Component({
  selector: 'app-profile-overview-conversation-item',
  templateUrl: './profile-overview-conversation-item.component.html',
  styleUrl: './profile-overview-conversation-item.component.scss'
})
export class ProfileOverviewConversationItemComponent {
  //#region Properties
  public data = input.required<ProfileOverviewConversationItemModel>();
  public caption = input.required<ProfileOverviewConversationItemCaptionModel>();
  public clickReplyEvent = output<string>();
  //#endregion

  //#region Method handler
  public onClickReplyEventHandler(id: string): void {
    this.clickReplyEvent.emit(id);
  }
  //#endregion
}
