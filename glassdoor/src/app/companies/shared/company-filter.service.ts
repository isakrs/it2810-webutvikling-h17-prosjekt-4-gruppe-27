import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Company }		from './company.model';

@Injectable()
export class CompanyFilterService {

  constructor(private http: Http) {}

  search(minRating?: number, minComments?: number): Observable<Company[]> {

    let url = `api/companies/?`;
    if (minRating && minComments) {
      url += `minRating=${minRating}&minComments=${minComments}`;
    }
    else if (minRating)    url += `minRating=${minRating}`;
    else if (minComments)  url += `minComments=${minComments}`;

    return this.http
               .get(url)
               .map(response => response.json() as Company[]);
  }
}
