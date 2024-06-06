import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOverviewNewProjectComponent } from './profile-overview-new-house-project.component';

describe('NewProjectComponent', () => {
  let component: ProfileOverviewNewProjectComponent;
  let fixture: ComponentFixture<ProfileOverviewNewProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileOverviewNewProjectComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProfileOverviewNewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
