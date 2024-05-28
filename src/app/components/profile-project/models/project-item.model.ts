import { ProjectItemParticipantsModel } from "./project-item-participant.model";

export interface ProjectItemModel {
    id: string;
    cover: string;
    title: string;
    description: string;
    dueDate: Date;
    participants: ProjectItemParticipantsModel[];
}