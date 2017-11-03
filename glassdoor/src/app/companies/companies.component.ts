import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Company }           from './shared/company.model';
import { CompanyService }    from './shared/company.service';

@Component({
  selector: 'my-companies',
  templateUrl: './companies.component.html',
  styleUrls: [ './companies.component.css' ]
})
export class CompaniesComponent implements OnInit {
  companies: Company[];
  selectedCompany: Company;

  constructor(
    private heroService: CompanyService,
    private router: Router) { }

  getCompanies(): void {
    this.heroService
        .getCompanies()
        .then(companies => this.companies = companies);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.companies.push(hero);
        this.selectedCompany = null;
      });
  }

  delete(hero: Company): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.companies = this.companies.filter(h => h !== hero);
          if (this.selectedCompany === hero) { this.selectedCompany = null; }
        });
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  onSelect(hero: Company): void {
    this.selectedCompany = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCompany.id]);
  }
}