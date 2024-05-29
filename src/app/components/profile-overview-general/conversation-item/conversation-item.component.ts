import { Component, input, output } from '@angular/core';
import { ConversationItemModel } from '../models/conversation-item.model';
import { ConversationItemCaptionModel } from '../models/caption-models/conversation-item.caption.model';

@Component({
  selector: 'app-conversation-item',
  templateUrl: './conversation-item.component.html',
  styleUrl: './conversation-item.component.scss'
})
export class ConversationItemComponent {
  //#region Properties
  public data = input.required<ConversationItemModel>();
  public caption = input.required<ConversationItemCaptionModel>();
  public clickReplyEvent = output<string>();
  //#endregion

  //#region Method handler
  public onClickReplyEventHandler(id: string): void {
    this.clickReplyEvent.emit(id);
  }
  //#endregion
}
