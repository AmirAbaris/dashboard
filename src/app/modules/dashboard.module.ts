import { NgModule } from '@angular/core';
import { SideBarComponent } from '../components/dashboard/side-bar/side-bar.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'side-bar', pathMatch: 'full' },
  { path: 'side-bar', component: SideBarComponent }
];

@NgModule({
  declarations: [SideBarComponent],
  imports: [RouterModule.forChild(routes)]
})
export class DashboardModule { }
