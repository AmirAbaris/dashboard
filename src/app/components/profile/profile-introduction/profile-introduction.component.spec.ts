import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileIntroductionMainComponent } from './profile-introduction.component';

describe('ProfileOverviewComponent', () => {
  let component: ProfileIntroductionMainComponent;
  let fixture: ComponentFixture<ProfileIntroductionMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileIntroductionMainComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProfileIntroductionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
