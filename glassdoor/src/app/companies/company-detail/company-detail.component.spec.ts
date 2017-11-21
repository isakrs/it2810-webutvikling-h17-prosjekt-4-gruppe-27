import { async, ComponentFixture, TestBed }     from '@angular/core/testing';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule }                          from '@angular/forms';
import { HttpModule }                           from '@angular/http';
import { RouterTestingModule }                  from '@angular/router/testing';

import { CompanyDetailComponent } from './company-detail.component';
import { CompanyService }         from '../shared/company.service';
import { Company }                from '../shared/company.model';
import { ReviewsComponent }       from '../reviews/reviews.component';
import { ReviewService }          from '../reviews/shared/review.service';
import { Review }                 from '../reviews/shared/review.model';

describe('CompanyDetailComponent', () => {

  let component:      CompanyDetailComponent;
  let fixture:        ComponentFixture<CompanyDetailComponent>;

  let companyService: CompanyService;
  let spyCompany:     any;
  let reviewService:  ReviewService;
  let spyReview:      any;

  const mockCompany: Company =  {
    _id: '8', name: 'Statoil', averageRating: 4, nComments: 53
  };
  const mockReviews: Review[] =  [
    {_id: '1', rating: 5, comment: 'Statoil gave me a great summer', idCompany: '1'},
    {_id: '2', rating: 4, comment: 'enjoyable.', idCompany: '3'}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDetailComponent, ReviewsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ FormsModule, HttpModule, RouterTestingModule ],
      providers: [ CompanyService, ReviewService ]
    })
    .compileComponents().then( () =>  {
      fixture = TestBed.createComponent(CompanyDetailComponent);

      companyService = fixture.debugElement.injector.get(CompanyService);
      spyCompany = spyOn(companyService, 'getCompany')
            .and.returnValue(Promise.resolve(mockCompany));

      reviewService = fixture.debugElement.injector.get(ReviewService);
      spyReview = spyOn(reviewService, 'getReviews')
            .and.returnValue(Promise.resolve(mockReviews));

      component = fixture.componentInstance;
    })
  }));

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
