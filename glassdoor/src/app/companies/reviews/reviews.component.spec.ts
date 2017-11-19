import { ComponentFixture, async, fakeAsync, tick, TestBed } from '@angular/core/testing';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { By } from '@angular/platform-browser';

import { ReviewsComponent } from './reviews.component';
import { ReviewService } from './shared/review.service';
import { Review } from './shared/review.model';

describe('ReviewsComponent', () => {

  let comp: ReviewsComponent;
  let fixture: ComponentFixture<ReviewsComponent>;
  let reviewService: ReviewService;
  let spy: any;

  const mockCompanies: Review[] =  [
    {id: 1, rating: 5, comment: 'Statoil gave me a great summer', idCompany: 1},
    {id: 2, rating: 4, comment: 'enjoyable.', idCompany: 3},
    {id: 3, rating: 5, comment: 'Blank gave me a great summer', idCompany: 3},
    {id: 4, rating: 1, comment: 'Pays shit.', idCompany: 1}
  ];

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ReviewsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        ReviewService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ],
      imports: [
        RouterModule.forRoot([]),
        HttpModule
      ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsComponent);
    comp = fixture.componentInstance;

    reviewService = fixture.debugElement.injector.get(ReviewService);
  });

  it('should be created', () => {
    expect(comp).toBeTruthy();
  });

  

  

  /* Add, delete and update functionality will be tested as E2E tests. */

});
