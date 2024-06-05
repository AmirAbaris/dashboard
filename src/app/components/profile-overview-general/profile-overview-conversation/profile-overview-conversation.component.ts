import { Component, input, output } from '@angular/core';
import { ProfileOverviewConversationInputCaptionModel } from '../models/caption-models/profile-overview-conversation-input.caption.model';
import { ProfileOverviewConversationItemModel } from '../models/profile-overview-conversation-item.model';

@Component({
  selector: 'app-profile-overview-conversation',
  templateUrl: './profile-overview-conversation.component.html',
  styleUrl: './profile-overview-conversation.component.scss'
})
export class ProfileOverviewConversationComponent {
  //#region Properties
  public data = input.required<ProfileOverviewConversationItemModel[]>();
  public caption = input.required<ProfileOverviewConversationInputCaptionModel>();
  public clickReplyButtonEvent = output<string>();
  //#endregion

  //#region Method handler
  public onClickReplyButtonEventHandler(id: string): void {
    this.clickReplyButtonEvent.emit(id);
  }
  //#endregion
}
