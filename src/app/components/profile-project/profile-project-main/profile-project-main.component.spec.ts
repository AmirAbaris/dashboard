import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileProjectComponent } from './profile-project-main.component';

describe('ProjectComponent', () => {
    let component: ProfileProjectComponent;
    let fixture: ComponentFixture<ProfileProjectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProfileProjectComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ProfileProjectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});