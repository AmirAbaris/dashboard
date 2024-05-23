import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMainComponent } from '../components/dashboard/dashboard-main/dashboard-main.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { SideBarComponent } from '../components/dashboard/side-bar/side-bar.component';
import { SidebarChildItemComponent } from '../components/dashboard/sidebar-child-item/sidebar-child-item.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardMainComponent }
];

@NgModule({
  declarations: [DashboardMainComponent, SideBarComponent, SidebarChildItemComponent],
  imports: [
    RouterModule.forChild(routes),
    NgOptimizedImage,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    CommonModule
  ]
})
export class DashboardModule { }
