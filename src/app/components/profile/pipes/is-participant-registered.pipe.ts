import { Pipe, PipeTransform } from '@angular/core';
import { ParticipantModel } from '../models/participant.model';

@Pipe({
  name: 'isParticipantRegistered'
})
export class IsParticipantRegisteredPipe implements PipeTransform {

  transform(participants: ParticipantModel[], id: string): ParticipantModel[] {
    return participants.filter(participant => participant.registeredProjectIds.includes(id));
  }

}
