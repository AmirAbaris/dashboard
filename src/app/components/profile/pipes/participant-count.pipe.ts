// import { Pipe, PipeTransform } from '@angular/core';
// import { ProjectItemModel } from '../models/project-item.model';
// import { ParticipantModel } from '../models/project-item-participant.model';

// @Pipe({
//   name: 'participantCount'
// })
// export class ParticipantCountPipe implements PipeTransform {

//   transform(project: ProjectItemModel, participants: ParticipantModel[]): number {
//     const participantCount = participants.reduce((count, participant) => {
//       if (participant.registeredProjectIds.includes(project.id)) {
//         return count + 1;
//       } else {
//         return count;
//       }
//     }, 0);

//     return participantCount;
//   }

// }
