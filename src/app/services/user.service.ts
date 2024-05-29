import { Injectable } from '@angular/core';
import { ProfileModel } from '../components/profile-overview-general/models/profile.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserService {
  public getProfile(): Observable<ProfileModel> {
    return of(profileData);
  }
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
