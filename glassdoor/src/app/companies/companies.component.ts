import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Company }                from './shared/company.model';
import { CompanyService }         from './shared/company.service';
import { SortCompaniesPipe }      from './shared/sort-companies.pipe';
import { CompanyFilterComponent}  from './company-filter/company-filter.component';
import { ProfileService }         from '../profile/shared/profile.service';

@Component({
  selector: 'my-companies',
  templateUrl: './companies.component.html',
  styleUrls: [ './companies.component.css' ]
})
export class CompaniesComponent implements OnInit {
  
  companies: Company[];
  selectedCompany: Company;
  sortValue: string;
  isLoggedIn: boolean;

  constructor(
    private companyService: CompanyService,
    private router:         Router,
    private profileService: ProfileService
  ) { }

  getCompanies(filter?): void {
    let minRating; let minComments;
    if (filter) {
      minRating = filter.minRating;
      minComments = filter.minComments;
    }
    this.companyService
        .getCompanies(minRating, minComments)
        .then(companies => this.companies = companies);
  }

  getNextPageCompanies(): void {
    this.companyService
      .getCompanies(undefined, undefined, true)
      .then(companies => this.companies = companies);
  }


  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.companyService.create(name)
      .then(company => {
        this.companies.push(company);
        this.selectedCompany = null;
        this.getCompanies();
      });
  }

  ngOnInit(): void {
    this.getCompanies();
    this.sortValue = "name";
    const session = JSON.parse(localStorage.getItem('session'));
    this.checkSession(session);
  }

  onSelect(company: Company): void {
    this.selectedCompany = company;
    this.router.navigate(['/detail', this.selectedCompany._id]);
  }

  private checkSession(session: any): void {
    if (session === null) {
      this.isLoggedIn = false;
    } else {
      this.profileService.isTokenValid(session.token)
        .then(isLoggedIn => this.isLoggedIn = isLoggedIn);
    }
  }
}
