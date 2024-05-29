import { Injectable } from '@angular/core';
import { ProfileModel } from '../components/profile-overview-general/models/profile.model';
import { Observable, of } from 'rxjs';
import { ConversationItemModel } from '../components/profile-overview-general/models/conversation-item.model';

@Injectable()
export class UserService {
  //#region Main logic methods
  public getProfile(): Observable<ProfileModel> {
    return of(profileData);
  }

  public getConversationItems(): Observable<ConversationItemModel[]> {
    return of(conversationItems);
  }
  //#endregion
}


const profileData: ProfileModel = {
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
