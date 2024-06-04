import { ParticipantModel } from "./participant.model";

export interface HouseProjectModel {
    id: string;
    cover: string;
    title: string;
    description: string;
    participants: ParticipantModel[];
}
