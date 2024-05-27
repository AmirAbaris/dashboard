import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileIntroductionComponent } from './profile-introduction.component';

describe('ProfileOverviewComponent', () => {
  let component: ProfileIntroductionComponent;
  let fixture: ComponentFixture<ProfileIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileIntroductionComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProfileIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
