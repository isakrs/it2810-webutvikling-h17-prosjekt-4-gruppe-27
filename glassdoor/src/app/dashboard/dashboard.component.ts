import { Component, OnInit } from '@angular/core';

import { Company }     from '../company/company';
import { CompanyService } from '../company.service';

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