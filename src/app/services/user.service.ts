import { Injectable } from '@angular/core';
import { ProfileModel } from '../components/account-profile/models/profile.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserService {
  public getProfile(): Observable<ProfileModel> {
    return of(profileData);
  }
}

const profileData: ProfileModel = {
  cover: 'assets/images/p2.jpg',
  fistName: 'Alec',
  lastName: 'Thompson',
  role: 'CEO / Co-Founder'
}