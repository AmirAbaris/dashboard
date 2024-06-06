import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileOverviewHouseProjectItemComponent } from './profile-overview-house-project-item.component';


describe('ProfileOverviewProjectMainComponent', () => {
  let component: ProfileOverviewHouseProjectItemComponent;
  let fixture: ComponentFixture<ProfileOverviewHouseProjectItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileOverviewHouseProjectItemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProfileOverviewHouseProjectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
