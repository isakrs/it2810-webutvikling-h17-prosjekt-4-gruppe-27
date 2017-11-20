import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { MockBackend, MockConnection } 			from '@angular/http/testing';
import { Http, Response, ResponseOptions,
				 BaseRequestOptions, RequestOptions,
				 ConnectionBackend } 								from '@angular/http';
import { ReflectiveInjector } 							from '@angular/core';

import { ReviewService } 	from './review.service';
import { Review } 					from './review.model';

describe('ReviewService', () => {

	const mockResponse = [
    {_id: 0, rating: 5, comment: 'DNB paid me well', idCompany: 1},
    {_id: 1, rating: 1, comment: 'paid shit.', idCompany: 2}
  ];

  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      {provide: ConnectionBackend, useClass: MockBackend},
      {provide: RequestOptions, useClass: BaseRequestOptions},
      Http,
      ReviewService
    ]);

    this.reviewService = this.injector.get(ReviewService);
    this.backend = this.injector.get(ConnectionBackend) as MockBackend;
    this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
  });

  it('getReviews(idCompany=1) should return reviews', fakeAsync(() => {

    let result: Review[];

    // note: had to add '.data' to companies here, if not result was undefined. Ref earlier discussion about json().data
    this.reviewService.getReviews(1).then((reviews) => {
      return result = reviews.data
    });
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify({data: mockResponse})
    })));

    tick();
    expect(result.length).toBe(1);
    expect(result[0]._id).toBe(0);
    expect(result[0].idCompany).toBe(1);
    expect(result[0].rating).toBe(5);
    expect(result[0].comment).toBe('DNB paid me well');

  }));
});
