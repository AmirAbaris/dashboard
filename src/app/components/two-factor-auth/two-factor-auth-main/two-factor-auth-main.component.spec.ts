import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFactorAuthTwoFactorAuthMainComponent } from './two-factor-auth-main.component';

describe('TwoFactorAuthTwoFactorAuthMainComponent', () => {
  let component: TwoFactorAuthTwoFactorAuthMainComponent;
  let fixture: ComponentFixture<TwoFactorAuthTwoFactorAuthMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwoFactorAuthTwoFactorAuthMainComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TwoFactorAuthTwoFactorAuthMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
