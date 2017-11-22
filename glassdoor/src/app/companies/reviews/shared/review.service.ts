import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment }   from '../../../../environments/environment';

import { Review } from './review.model';

@Injectable()
export class ReviewService {

  private token:    string;
  private session:  any;
  private headers:  Headers;

  private reviewsUrl = `${environment.apiUrl}/api/review`;

  constructor(private http: Http) {
    const session = JSON.parse(localStorage.getItem('session'));
    if (session !== null) {
      this.token = session.token;
    }
    // Initialize headers. Token will be undefined if user is not logged in
    // This is handled by the API
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${this.token}`
    });
  }

  getReviews(idCompany: string): Promise<Review[]> {
    const url = `${this.reviewsUrl}/company/${idCompany}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Review[])
      .catch(this.handleError);
  }

  getReviewsOfUser(): Promise<Review[]> {
    const url = `${this.reviewsUrl}/user`;
    return this.http.get(url, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Review[])
      .catch(this.handleError);
  }

  delete(id: string): Promise<Review> {
    const url = `${this.reviewsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(rating: number, comment: string, idCompany: string): Promise<Review> {
    return this.http
      .post(
        this.reviewsUrl,
        JSON.stringify({rating: rating, comment: comment, idCompany: idCompany}),
        {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Review)
      .catch(this.handleError);
  }

  update(review: Review): Promise<Review> {
    const url = `${this.reviewsUrl}/${review._id}`;
    return this.http
      .put(url, JSON.stringify(review), {headers: this.headers})
      .toPromise()
      .then(() => review)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
