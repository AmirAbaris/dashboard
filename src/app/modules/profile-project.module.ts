import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProfileProjectMainComponent } from '../components/profile-project/profile-project-main/profile-project-main.component';
import { ProfileProjectItemComponent } from '../components/profile-project/profile-project-item/profile-project-item.component';
import { ProfileProjectNewComponent } from '../components/profile-project/profile-project-new/profile-project-new.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule, Routes } from '@angular/router';
import { ProjectRepository } from '../repositories/project.repository';
import { ProjectService } from '../services/project.service';

const routes: Routes = [
    { path: '', component: ProfileProjectMainComponent }
];

@NgModule({
    declarations: [ProfileProjectMainComponent, ProfileProjectItemComponent, ProfileProjectNewComponent],
    imports: [
        MatMenuModule,
        NgOptimizedImage,
        MatIconModule,
        MatDividerModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [ProjectService, ProjectRepository]
})
export class ProfileProjectModule { }