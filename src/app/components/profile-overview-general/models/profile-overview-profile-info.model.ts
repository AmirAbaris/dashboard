import { ProfileSocialModel } from "./profile-social.model";

export interface ProfileOverviewProfileInfoModel {
    firstName: string;
    lastName: string;
    description: string;
    email: string;
    mobile: string;
    location: string;
    social: ProfileSocialModel;
}