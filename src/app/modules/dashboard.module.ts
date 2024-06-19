import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMainComponent } from '../components/dashboard/dashboard-main/dashboard-main.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NgClass, NgIf, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { SideBarComponent } from '../components/dashboard/side-bar/side-bar.component';
import { SidebarChildItemComponent } from '../components/dashboard/sidebar-child-item/sidebar-child-item.component';
import { ActiveMenuDirective } from '../components/dashboard/directives/active-menu.directive';
import { ActivateMenuChildDirective } from '../components/dashboard/directives/activate-menu-child.directive';
import { AppService } from '../services/app.service';
import { AppRepository } from '../repositories/app-repository';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DashboardMainComponent,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('../modules/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'account/settings',
        loadChildren: () => import('./account-setting.module').then(m => m.AccountSettingModule)
      }
    ]
  }
];

@NgModule({
  declarations: [
    DashboardMainComponent, SideBarComponent,
    SidebarChildItemComponent, ActiveMenuDirective,
    ActivateMenuChildDirective
  ],
  imports: [
    RouterModule.forChild(routes),
    NgOptimizedImage,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    NgIf,
    UpperCasePipe,
    NgClass
  ],
  providers: [AppService, AppRepository]
})
export class DashboardModule { }
