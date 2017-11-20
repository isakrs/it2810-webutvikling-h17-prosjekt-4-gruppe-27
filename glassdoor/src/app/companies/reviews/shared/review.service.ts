import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Review } from './review.model';

@Injectable()
export class ReviewService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private reviewsUrl = 'api/reviews';  // URL to web api

  constructor(private http: Http) { }

  getReviews(idCompany: number): Promise<Review[]> {
    return this.http.get(this.reviewsUrl)
      .toPromise()
      .then(response => {
        let res = response.json().filter(review => review.idCompany === idCompany);
        return res as Review[]}
        )
      .catch(this.handleError);
  }

  delete(id: number): Promise<Review> {
    const url = `${this.reviewsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(rating: number, comment: string): Promise<Review> {
    return this.http
      .post(
        this.reviewsUrl,
        JSON.stringify({rating: rating, comment: comment}),
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
