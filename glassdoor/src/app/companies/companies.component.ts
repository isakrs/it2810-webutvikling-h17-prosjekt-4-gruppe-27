import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Company }           from './shared/company.model';
import { CompanyService }    from './shared/company.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './companies.component.html',
  styleUrls: [ './companies.component.css' ]
})
export class CompaniesComponent implements OnInit {
  heroes: Company[];
  selectedCompany: Company;

  constructor(
    private heroService: CompanyService,
    private router: Router) { }

  getHeroes(): void {
    this.heroService
        .getHeroes()
        .then(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedCompany = null;
      });
  }

  delete(hero: Company): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedCompany === hero) { this.selectedCompany = null; }
        });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Company): void {
    this.selectedCompany = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCompany.id]);
  }
}