import { AuthenticatorStatusType } from "../types/authenticator-status.type";
import { SecurityKeysStatusType } from "../types/security-key-status.type";
import { SmsNumberStatusModel } from "./sms-number-status.model";

export interface TwoFactorAuthModel {
    statusEnabled: boolean;
    securityKeysStatus: SecurityKeysStatusType;
    smsNumberStatus: SmsNumberStatusModel;
    authenticatorStatus: AuthenticatorStatusType;
}