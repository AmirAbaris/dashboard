import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileOverviewHouseProjectComponent } from './profile-overview-house-project.component';


describe('ProfileOverviewProjectMainComponent', () => {
  let component: ProfileOverviewHouseProjectComponent;
  let fixture: ComponentFixture<ProfileOverviewHouseProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileOverviewHouseProjectComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProfileOverviewHouseProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
