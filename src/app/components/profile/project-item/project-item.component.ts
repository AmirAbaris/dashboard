import { Component } from '@angular/core';
import { ProjectItemModel } from '../models/project-item.model';
import { ParticipantModel } from '../models/participant.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss'
})
export class ProjectItemComponent {
  //#region Properties
  public items: ProjectItemModel[] = itemData;
  //#endregion
}

const itemData: ProjectItemModel[] = [
  {
    id: '1',
    cover: 'assets/images/profile-icons/i2.svg',
    title: 'Slack Bot',
    description: "If everything I did failed - which it doesn't, I think that it actually succeeds.",
    dueDate: new Date('2022-03-02'),
    registeredParticipantCount: 5
  },
  {
    id: '2',
    cover: 'assets/images/profile-icons/i1.svg',
    title: 'Premium support',
    description: "Pink is obviously a better color. Everyone’s born confident, and everything’s taken away from you.",
    dueDate: new Date('2021-11-22'),
    registeredParticipantCount: 3
  },
  {
    id: '3',
    cover: 'assets/images/profile-icons/i3.svg',
    title: 'Design tools',
    description: "Constantly growing. We’re constantly making mistakes from which we learn and improve.",
    dueDate: new Date('2020-03-06'),
    registeredParticipantCount: 4
  },
  {
    id: '4',
    cover: 'assets/images/profile-icons/i4.svg',
    title: 'Looking great',
    description: "You have the opportunity to play this game of life you need to appreciate every moment.",
    dueDate: new Date('2024-03-14'),
    registeredParticipantCount: 6
  },
  {
    id: '5',
    cover: 'assets/images/profile-icons/i5.svg',
    title: 'Developer First',
    description: "For standing out. But the time is now to be okay to be the greatest you.",
    dueDate: new Date('2022-01-16'),
    registeredParticipantCount: 4
  }
];

const ParticipantData: ParticipantModel[] = [
  {
    cover: 'assets/images/participants-covers/par1.jpg',
    registeredProjectIds: ['1', '2']
  },
  {
    cover: 'assets/images/participants-covers/par2.jpg',
    registeredProjectIds: ['1', '3', '4']
  },
  {
    cover: 'assets/images/participants-covers/par3.jpg',
    registeredProjectIds: ['2', '5', '6']
  }
];
