import { SmsNumberStatusType } from "../types/sms-number-status.type";

export interface SmsNumberStatusModel {
    status: SmsNumberStatusType;
    number?: string;
}