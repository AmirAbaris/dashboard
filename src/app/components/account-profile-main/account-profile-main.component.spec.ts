import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountProfileMainComponent } from './account-profile-main.component';

describe('AccountProfileMainComponent', () => {
  let component: AccountProfileMainComponent;
  let fixture: ComponentFixture<AccountProfileMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountProfileMainComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AccountProfileMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
