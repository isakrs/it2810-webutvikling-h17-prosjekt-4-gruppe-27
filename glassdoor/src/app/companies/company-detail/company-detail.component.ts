import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Company }    	from '../shared/company.model';
import { CompanyService } 	from '../shared/company.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: [ './company-detail.component.css' ]
})
export class CompanyDetailComponent implements OnInit {
  hero: Company;

  constructor(
    private heroService: CompanyService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}