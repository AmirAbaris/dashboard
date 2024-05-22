import { Component } from '@angular/core';
import { ProfileModel } from '../models/profile.model';

@Component({
  selector: 'app-profile-overview',
  templateUrl: './profile-overview.component.html',
  styleUrl: './profile-overview.component.scss'
})
export class ProfileOverviewComponent {
  public profileData: ProfileModel = profileData;
}

const profileData: ProfileModel = {
  cover: 'assets/images/p2.jpg',
  fistName: 'Alec',
  lastName: 'Thompson',
  role: 'CEO / Co-Founder'
}