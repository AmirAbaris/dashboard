import { NewProjectCaptionModel } from "./new-project.caption.model";
import { ProjectItemCaptionModel } from "./project-item.caption.model";
import { ProjectCaptionModel } from "./project.caption.model";

export interface ProjectInputCaptionModel {
    projectCaption: ProjectCaptionModel;
    projectItemCaption: ProjectItemCaptionModel;
    newProjectCaption: NewProjectCaptionModel;
}