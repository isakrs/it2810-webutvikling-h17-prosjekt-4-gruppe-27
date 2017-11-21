import { Component, OnInit } from '@angular/core';

import { Company }     		from '../companies/shared/company.model';
import { CompanyService } 	from '../companies/shared/company.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompanies()
      .then(companies => this.companies = companies.slice(1,5));
  }
}