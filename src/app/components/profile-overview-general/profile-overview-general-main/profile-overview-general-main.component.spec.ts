import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOverviewGeneralMainComponent } from './profile-overview-general-main.component';

describe('ProfileOverviewGeneralMainComponent', () => {
  let component: ProfileOverviewGeneralMainComponent;
  let fixture: ComponentFixture<ProfileOverviewGeneralMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileOverviewGeneralMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileOverviewGeneralMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
