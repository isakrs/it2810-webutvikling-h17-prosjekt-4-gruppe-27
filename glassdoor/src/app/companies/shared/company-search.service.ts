import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Company }		from './company.model';

@Injectable()
export class CompanySearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Company[]> {
    return this.http
               .get(`http://it2810-27.idi.ntnu.no:8084/api/company/?name=${term}`)
               .map(response => response.json() as Company[]);
  }
}
