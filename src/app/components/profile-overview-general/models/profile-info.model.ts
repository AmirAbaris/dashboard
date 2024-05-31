import { ProfileSocialModel } from "./profile-social.model";

export interface ProfileInfoModel {
    firstName: string;
    lastName: string;
    description: string;
    email: string;
    mobile: string;
    location: string;
    social: ProfileSocialModel;
}