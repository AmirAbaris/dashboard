import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFactorActionComponent } from './two-factor-auth-action.component';

describe('TwoFactorActionComponent', () => {
  let component: TwoFactorActionComponent;
  let fixture: ComponentFixture<TwoFactorActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwoFactorActionComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TwoFactorActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
