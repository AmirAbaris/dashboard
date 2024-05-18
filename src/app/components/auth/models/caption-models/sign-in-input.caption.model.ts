import { ErrorCaptionModel } from "./error-caption/error.caption.model";
import { SignInCaptionModel } from "./sign-in.caption.model";

export interface SignInInputCaptionModel {
    signInCaption: SignInCaptionModel;
    errorCaption: ErrorCaptionModel;
}