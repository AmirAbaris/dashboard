import { HouseProjectParticipantModel } from "./participant.model";

export interface HouseProjectItemModel {
    id: string;
    cover: string;
    title: string;
    description: string;
    participants: HouseProjectParticipantModel[];
}