import { ProfileSocialLinkModel } from "./profile-social-link.model";

export interface ProfileOverviewProfileInfoModel {
    firstName: string;
    lastName: string;
    description: string;
    email: string;
    mobile: string;
    location: string;
    socialLinks: ProfileSocialLinkModel;
}