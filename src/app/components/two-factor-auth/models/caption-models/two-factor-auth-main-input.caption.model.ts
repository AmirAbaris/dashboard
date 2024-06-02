import { TwoFactorAuthActionCaptionModel } from "./two-factor-auth-action.caption.model";
import { TwoFactorAuthMainCaptionModel } from "./two-factor-auth-main.caption.model";

export interface TwoFactorAuthMainInputCaptionModel {
    mainCaption: TwoFactorAuthMainCaptionModel;
    actionCaption: TwoFactorAuthActionCaptionModel;
}