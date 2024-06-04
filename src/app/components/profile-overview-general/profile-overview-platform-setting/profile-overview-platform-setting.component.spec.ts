import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformSettingComponent } from './profile-overview-platform-setting.component';

describe('PlatformSettingComponent', () => {
  let component: PlatformSettingComponent;
  let fixture: ComponentFixture<PlatformSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlatformSettingComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PlatformSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
