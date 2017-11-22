import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment }   from '../../../environments/environment';

import { Company }		from './company.model';

@Injectable()
export class CompanySearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Company[]> {
    return this.http
               .get(`${environment.apiUrl}/api/company/?name=${term}`)
               .map(response => response.json() as Company[]);
  }
}
