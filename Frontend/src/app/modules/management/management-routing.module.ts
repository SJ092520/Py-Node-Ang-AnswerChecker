import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementDashboardComponent } from './management-dashboard/management-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
