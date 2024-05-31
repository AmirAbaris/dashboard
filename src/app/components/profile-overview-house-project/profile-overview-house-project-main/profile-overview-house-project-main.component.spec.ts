import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOverviewProjectMainComponent } from './profile-overview-house-project-main.component';

describe('ProfileOverviewProjectMainComponent', () => {
  let component: ProfileOverviewProjectMainComponent;
  let fixture: ComponentFixture<ProfileOverviewProjectMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileOverviewProjectMainComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProfileOverviewProjectMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
