import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Company } from './company.model';

@Injectable()
export class CompanyService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private companiesUrl = 'api/companies';  // URL to web api

  constructor(private http: Http) { }

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

  getCompany(id: number): Promise<Company> {
    const url = `${this.companiesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Company)
      .catch(this.handleError);
  }

  delete(id: number): Promise<Company> {
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
    const url = `${this.companiesUrl}/${company.id}`;
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
