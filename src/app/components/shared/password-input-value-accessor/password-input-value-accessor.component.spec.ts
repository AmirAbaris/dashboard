import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordInputValueAccessorComponent } from './password-input-value-accessor.component';

describe('PasswordInputComponent', () => {
  let component: PasswordInputValueAccessorComponent;
  let fixture: ComponentFixture<PasswordInputValueAccessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordInputValueAccessorComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PasswordInputValueAccessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
