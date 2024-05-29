import { ParticipantModel } from "./participant.model";

export interface ProjectModel {
    id: string;
    cover: string;
    title: string;
    description: string;
    participants: ParticipantModel[];
}