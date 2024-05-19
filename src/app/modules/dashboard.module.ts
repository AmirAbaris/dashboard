import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMainComponent } from '../components/dashboard/dashboard-main/dashboard-main.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardMainComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class DashboardModule { }
