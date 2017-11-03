import { Component, OnInit } from '@angular/core';

import { Company }     from '../companies/shared/company.model';
import { CompanyService } from '../companies/shared/company.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Company[] = [];

  constructor(private heroService: CompanyService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}