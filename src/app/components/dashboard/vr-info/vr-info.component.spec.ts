import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrInfoComponent } from './vr-info.component';

describe('VrInfoComponent', () => {
  let component: VrInfoComponent;
  let fixture: ComponentFixture<VrInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VrInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VrInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
