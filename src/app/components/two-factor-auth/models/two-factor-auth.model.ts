export interface TwoFactorAuthModel {
    twoFactorAuthEnabled: boolean;
    securityKey?: string;
    smsNumber?: string;
    authenticator?: string;
}