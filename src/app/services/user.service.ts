import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConversationItemModel } from '../components/profile-overview-general/models/conversation-item.model';
import { ProjectModel } from '../components/profile-overview-project/models/project.model';
import { ProfileInfoModel } from '../components/profile-overview-general/models/profile-info.model';

@Injectable()
export class UserService {
  //#region Main logic methods
  public getProfile(): Observable<ProfileInfoModel> {
    return of(profileData);
  }

  public getConversationItems(): Observable<ConversationItemModel[]> {
    return of(conversationItems);
  }

  public getProject(): Observable<ProjectModel[]> {
    return of(projectData);
  }
  //#endregion
}

const profileData: ProfileInfoModel = {
  firstName: 'Alec',
  lastName: 'Thompson',
  description: "Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).",
  email: 'alecthompson@mail.com',
  mobile: '(44) 123 1234 123',
  location: 'USA',
  social: {
    facebookLink: 'https://facebook.com/alec.thompson',
    xLink: 'https://twitter.com/alec_thompson',
    instagramLink: 'https://instagram.com/alec.thompson'
  }
}

const conversationItems: ConversationItemModel[] = [
  {
    id: '1',
    cover: 'assets/images/people/c1.jpg',
    name: 'Sophie B.',
    bio: 'Hi! I need more information..',
  },
  {
    id: '2',
    cover: 'assets/images/people/c2.jpg',
    name: 'Anne Marie',
    bio: 'Awesome work, can you..',
  },
  {
    id: '3',
    cover: 'assets/images/people/c3.jpg',
    name: 'Ivanna',
    bio: 'About files I can..',
  },
  {
    id: '4',
    cover: 'assets/images/people/c4.jpg',
    name: 'Peterson',
    bio: 'Have a great afternoon..',
  },
  {
    id: '5',
    cover: 'assets/images/people/c5.jpg',
    name: 'Nick Daniel',
    bio: 'Hi! I need more information..',
  },
];

const projectData: ProjectModel[] = [
  {
    id: '1',
    cover: 'assets/images/projects/pr1.jpg',
    title: 'Modern',
    description: 'As Uber works through a huge amount of internal management turmoil.',
    participants: [
      {
        name: 'Alice',
        cover: 'assets/images/participants/par1.jpg'
      },
      {
        name: 'Bob Johnson',
        cover: 'assets/images/participants/par2.jpg'
      }
    ]
  },
  {
    id: '2',
    cover: 'assets/images/projects/pr2.jpg',
    title: 'Scandinavian',
    description: 'Music is something that every person has his or her own specific opinion about. ',
    participants: [
      {
        name: 'Charlie Brown',
        cover: 'assets/images/participants/par3.jpg'
      },
      {
        name: 'Diana Prince',
        cover: 'assets/images/participants/par2.jpg'
      }
    ]
  },
  {
    id: '3',
    cover: 'assets/images/projects/pr3.jpg',
    title: 'Minimalist',
    description: 'Different people have different taste, and various types of music.',
    participants: [
      {
        name: 'Edward Nigma',
        cover: 'assets/images/participants/par1.jpg'
      },
      {
        name: 'Fiona Glenanne',
        cover: 'assets/images/participants/par3.jpg'
      }
    ]
  }
];

