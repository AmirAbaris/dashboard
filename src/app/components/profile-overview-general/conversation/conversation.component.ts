import { Component, input, output } from '@angular/core';
import { ConversationInputCaptionModel } from '../models/caption-models/conversation-input.caption.model';
import { ConversationItemModel } from '../models/conversation-item.model';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.scss'
})
export class ConversationComponent {
  //#region Properties
  public data = input.required<ConversationItemModel[]>();
  public caption = input.required<ConversationInputCaptionModel>();
  public clickReplyEvent = output<string>();
  //#endregion

  //#region Method handler
  public onClickReplyEventHandler(id: string): void {
    this.clickReplyEvent.emit(id);
  }
  //#endregion
}
