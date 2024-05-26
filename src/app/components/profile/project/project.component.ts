import { Component, input } from '@angular/core';
import { ProjectCaptionModel } from '../models/caption-models/project.caption.model';
import { ParticipantModel } from '../models/participant.model';
import { ProjectItemModel } from '../models/project-item.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  //#region Properties
  public caption = input.required<ProjectCaptionModel>();
  public items: ProjectItemModel[] = itemData;
  public participants: ParticipantModel[] = participantData;
  //#endregion
}

const itemData: ProjectItemModel[] = [
  {
    id: '1',
    cover: 'assets/images/profile-icons/i2.svg',
    title: 'Slack Bot',
    description: "If everything I did failed - which it doesn't, I think that it actually succeeds.",
    dueDate: new Date('2022-03-02')
  },
  {
    id: '2',
    cover: 'assets/images/profile-icons/i1.svg',
    title: 'Premium support',
    description: "Pink is obviously a better color. Everyone’s born confident, and everything’s taken away from you.",
    dueDate: new Date('2021-11-22')
  },
  {
    id: '3',
    cover: 'assets/images/profile-icons/i3.svg',
    title: 'Design tools',
    description: "Constantly growing. We’re constantly making mistakes from which we learn and improve.",
    dueDate: new Date('2020-03-06')
  },
  {
    id: '4',
    cover: 'assets/images/profile-icons/i4.svg',
    title: 'Looking great',
    description: "You have the opportunity to play this game of life you need to appreciate every moment.",
    dueDate: new Date('2024-03-14')
  },
  {
    id: '5',
    cover: 'assets/images/profile-icons/i5.svg',
    title: 'Developer First',
    description: "For standing out. But the time is now to be okay to be the greatest you.",
    dueDate: new Date('2022-01-16')
  }
];

const participantData: ParticipantModel[] = [
  {
    cover: 'assets/images/participants-covers/par1.jpg',
    registeredProjectIds: ['1', '2']
  },
  {
    cover: 'assets/images/participants-covers/par2.jpg',
    registeredProjectIds: ['1', '2', '3', '4']
  },
  {
    cover: 'assets/images/participants-covers/par3.jpg',
    registeredProjectIds: ['2', '5', '6']
  },
  {
    cover: 'assets/images/participants-covers/par1.jpg',
    registeredProjectIds: ['2', '5', '6']
  },
  {
    cover: 'assets/images/participants-covers/par2.jpg',
    registeredProjectIds: ['1', '2', '3', '4']
  },
  {
    cover: 'assets/images/participants-covers/par3.jpg',
    registeredProjectIds: ['2', '5', '6']
  },
];
