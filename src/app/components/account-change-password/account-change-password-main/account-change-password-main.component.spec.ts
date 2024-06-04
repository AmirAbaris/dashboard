import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangePasswordMainComponent } from './account-change-password-main.component';

describe('AccountChangePasswordMainComponent', () => {
  let component: AccountChangePasswordMainComponent;
  let fixture: ComponentFixture<AccountChangePasswordMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountChangePasswordMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountChangePasswordMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
