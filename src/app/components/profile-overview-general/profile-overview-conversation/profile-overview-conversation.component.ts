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
  public clickReplyEvent = output<string>();
  //#endregion

  //#region Method handler
  public onClickReplyEventHandler(id: string): void {
    this.clickReplyEvent.emit(id);
  }
  //#endregion
}
