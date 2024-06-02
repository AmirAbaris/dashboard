import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFactorActionItemComponent } from './two-factor-action-item.component';

describe('TwoFactorActionItemComponent', () => {
  let component: TwoFactorActionItemComponent;
  let fixture: ComponentFixture<TwoFactorActionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwoFactorActionItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwoFactorActionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
