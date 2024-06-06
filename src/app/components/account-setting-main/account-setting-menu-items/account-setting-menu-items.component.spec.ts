import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMenuItemsComponent } from './account-setting-menu-items.component';

describe('AccountMenuItemsComponent', () => {
  let component: AccountMenuItemsComponent;
  let fixture: ComponentFixture<AccountMenuItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountMenuItemsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AccountMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
