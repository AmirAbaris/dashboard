import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMenuMainComponent } from './account-setting-main.component';

describe('AccountMenuMainComponent', () => {
  let component: AccountMenuMainComponent;
  let fixture: ComponentFixture<AccountMenuMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountMenuMainComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AccountMenuMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
