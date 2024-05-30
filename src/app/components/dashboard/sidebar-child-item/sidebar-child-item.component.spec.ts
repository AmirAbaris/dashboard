import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarChildItemComponent } from './sidebar-child-item.component';

describe('SidebarChildItemComponent', () => {
  let component: SidebarChildItemComponent;
  let fixture: ComponentFixture<SidebarChildItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarChildItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarChildItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
