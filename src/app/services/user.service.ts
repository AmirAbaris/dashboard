import { Injectable } from '@angular/core';
import { ProjectItemModel } from '../components/profile/models/project-item.model';
import { Observable, of } from 'rxjs';
import { ProfileModel } from '../components/profile/models/profile.model';

@Injectable()
export class UserService {
  //#region Main logic methods
  public getProjectItem(): Observable<ProjectItemModel[]> {
    return of(itemData);
  }

  public getProfile(): Observable<ProfileModel> {
    return of(profileData);
  }
}

const itemData: ProjectItemModel[] = [
  {
    id: '1',
    cover: 'assets/images/profile-icons/i2.svg',
    title: 'Slack Bot',
    description: "If everything I did failed - which it doesn't, I think that it actually succeeds.",
    dueDate: new Date('2022-03-02'),
    participants: [
      {
        cover: 'assets/images/participants-covers/par1.jpg',
        name: 'Participant 1',
        id: '1'
      },
      {
        cover: 'assets/images/participants-covers/par2.jpg',
        name: 'Participant 2',
        id: '2'
      }
    ]
  },
  {
    id: '2',
    cover: 'assets/images/profile-icons/i1.svg',
    title: 'Premium support',
    description: "Pink is obviously a better color. Everyone’s born confident, and everything’s taken away from you.",
    dueDate: new Date('2021-11-22'),
    participants: [
      {
        cover: 'assets/images/participants-covers/par2.jpg',
        name: 'Participant 2',
        id: '2'
      },
      {
        cover: 'assets/images/participants-covers/par3.jpg',
        name: 'Participant 3',
        id: '3'
      },
      {
        cover: 'assets/images/participants-covers/par1.jpg',
        name: 'Participant 1',
        id: '1'
      }
    ]
  },
  {
    id: '3',
    cover: 'assets/images/profile-icons/i3.svg',
    title: 'Design tools',
    description: "Constantly growing. We’re constantly making mistakes from which we learn and improve.",
    dueDate: new Date('2020-03-06'),
    participants: [
      {
        cover: 'assets/images/participants-covers/par3.jpg',
        name: 'Participant 3',
        id: '3'
      },
      {
        cover: 'assets/images/participants-covers/par1.jpg',
        name: 'Participant 1',
        id: '1'
      }
    ]
  },
  {
    id: '4',
    cover: 'assets/images/profile-icons/i4.svg',
    title: 'Looking great',
    description: "You have the opportunity to play this game of life you need to appreciate every moment.",
    dueDate: new Date('2024-03-14'),
    participants: [
      {
        cover: 'assets/images/participants-covers/par1.jpg',
        name: 'Participant 1',
        id: '1'
      },
      {
        cover: 'assets/images/participants-covers/par3.jpg',
        name: 'Participant 3',
        id: '3'
      }
    ]
  },
  {
    id: '5',
    cover: 'assets/images/profile-icons/i5.svg',
    title: 'Developer First',
    description: "For standing out. But the time is now to be okay to be the greatest you.",
    dueDate: new Date('2022-01-16'),
    participants: [
      {
        cover: 'assets/images/participants-covers/par2.jpg',
        name: 'Participant 2',
        id: '2'
      },
      {
        cover: 'assets/images/participants-covers/par3.jpg',
        name: 'Participant 3',
        id: '3'
      }
    ]
  }
];

const profileData: ProfileModel = {
  cover: 'assets/images/p2.jpg',
  fistName: 'Alec',
  lastName: 'Thompson',
  role: 'CEO / Co-Founder'
}

