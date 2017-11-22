import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }			from './dashboard/dashboard.component';
import { CompaniesComponent }			from './companies/companies.component';
import { CompanyDetailComponent }		from './companies/company-detail/company-detail.component';
import { ProfileComponent }				from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',    component: DashboardComponent },
  { path: 'detail/:_id',  component: CompanyDetailComponent },
  { path: 'companies',    component: CompaniesComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
