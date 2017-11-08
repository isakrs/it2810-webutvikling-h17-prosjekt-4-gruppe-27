import { BrowserModule }   from '@angular/platform-browser';
import { NgModule }        from '@angular/core';
import { FormsModule }     from '@angular/forms';
import { HttpModule }      from '@angular/http';

import { AppRoutingModule }       from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule }   from 'angular-in-memory-web-api';
import { InMemoryDataService }    from './shared/in-memory-data.service';

import { AppComponent }           from './app.component';
import { CompaniesComponent }     from './companies/companies.component';
import { CompanyDetailComponent } from './companies/company-detail/company-detail.component';
import { CompanySearchComponent } from './companies/company-search/company-search.component';
import { DashboardComponent }     from './dashboard/dashboard.component';
import { CompanyService }         from './companies/shared/company.service';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    CompanyDetailComponent,
    CompanySearchComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [ CompanyService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
