import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }                      from '@angular/forms';
import { HttpModule }                       from '@angular/http';
import { RouterTestingModule }              from '@angular/router/testing';

import { CompanyDetailComponent } from './company-detail.component';
import { CompanyService }         from '../shared/company.service';
import { ReviewsComponent }       from '../reviews/reviews.component';
import { ReviewService }           from '../review/shared/review.service';

describe('CompanyDetailComponent', () => {

  let component:  CompanyDetailComponent;
  let fixture:    ComponentFixture<CompanyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDetailComponent, ReviewsComponent ],
      imports: [ FormsModule, HttpModule, RouterTestingModule ],
      providers: [ CompanyService, ReviewService ]
    })
    .compileComponents().then( () =>  {
      fixture = TestBed.createComponent(CompanyDetailComponent);
      component = fixture.componentInstance;
    })
  }));

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
