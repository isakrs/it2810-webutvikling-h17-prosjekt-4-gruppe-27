import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment }   from '../../../environments/environment';

import { Company } from './company.model';


@Injectable()
export class CompanyService {
  private token: string;
  private session: any;
  private headers: Headers;
  private companiesUrl = `${environment.apiUrl}/api/company`;  // URL to web api

  constructor(private http: Http) {
    const session = JSON.parse(localStorage.getItem('session'));
    if (session !== null) {
      this.token = session.token;
    }

    // Initialize headers. Token will be undefined if user is not logged in, but that's fine
    // for some requests
    this.headers = new Headers(
      {'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${this.token}`}
      );
  }

  getCompanies(minRating?: number, minComments?: number): Promise<Company[]> {

    let url = this.companiesUrl
    if      (minRating  && !minComments) url += `/?minRating=${minRating}`;
    else if (!minRating && minComments)  url += `/?minComments=${minComments}`;
    else if (minRating  && minComments)  url += `/?minRating=${minRating}&minComments=${minComments}`;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Company[])
      .catch(this.handleError);
  }

  getCompany(id: string): Promise<Company> {
    const url = `${this.companiesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Company)
      .catch(this.handleError);
  }

  delete(id: string): Promise<Company> {
    const url = `${this.companiesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Company> {
    return this.http
      .post(this.companiesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Company)
      .catch(this.handleError);
  }

  update(company: Company): Promise<Company> {
    const url = `${this.companiesUrl}/${company._id}`;
    return this.http
      .put(url, JSON.stringify(company), {headers: this.headers})
      .toPromise()
      .then(() => company)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
