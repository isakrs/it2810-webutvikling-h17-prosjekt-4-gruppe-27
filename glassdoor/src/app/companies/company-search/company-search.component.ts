import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { CompanySearchService } from '../shared/company-search.service';
import { Company } from '../shared/company.model';

@Component({
  selector: 'company-search',
  templateUrl: './company-search.component.html',
  styleUrls: [ './company-search.component.css' ],
  providers: [CompanySearchService]
})
export class CompanySearchComponent implements OnInit {
  companies: Observable<Company[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private companySearchService: CompanySearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.companies = this.searchTerms
      .debounceTime(300)        
      .distinctUntilChanged()  
      .switchMap(term => term   
        ? this.companySearchService.search(term)
        : Observable.of<Company[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Company[]>([]);
      });
  }

  gotoDetail(company: Company): void {
    let link = ['/detail', company.id];
    this.router.navigate(link);
  }
}