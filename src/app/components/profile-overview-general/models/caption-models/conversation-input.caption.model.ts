import { ConversationItemCaptionModel } from "./conversation-item.caption.model";
import { ConversationCaptionModel } from "./conversation.caption.model";

export interface ConversationInputCaptionModel {
    conversationCaption: ConversationCaptionModel;
    conversationItemCaption: ConversationItemCaptionModel;
}