import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMainComponent } from '../components/dashboard/dashboard-main/dashboard-main.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardMainComponent }
];

@NgModule({
  declarations: [DashboardMainComponent],
  imports: [RouterModule.forChild(routes), NgOptimizedImage, MatDividerModule, MatIconModule]
})
export class DashboardModule { }
