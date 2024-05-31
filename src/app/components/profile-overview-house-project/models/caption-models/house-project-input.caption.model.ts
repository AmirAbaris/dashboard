
import { HouseProjectItemCaptionModel } from "./house-project-item.caption.model";
import { HouseProjectCaptionModel } from "./house-project.caption.model";
import { NewHouseProjectCaptionModel } from "./new-house-project.caption.model";

export interface HouseProjectInputCaptionModel {
    houseProjectCaption: HouseProjectCaptionModel;
    houseProjectItemCaption: HouseProjectItemCaptionModel;
    newHouseProjectCaption: NewHouseProjectCaptionModel;
}