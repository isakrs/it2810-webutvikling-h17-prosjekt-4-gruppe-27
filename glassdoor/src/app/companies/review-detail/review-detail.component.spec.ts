import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }                      from '@angular/forms';
import { HttpModule }                       from '@angular/http';
import { RouterTestingModule }              from '@angular/router/testing';

import { ReviewDetailComponent } from './review-detail.component';
import { ReviewService }         from '../shared/review.service';

describe('ReviewDetailComponent', () => {

  let component:  ReviewDetailComponent;
  let fixture:    ComponentFixture<ReviewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewDetailComponent ],
      imports: [ FormsModule, HttpModule, RouterTestingModule ],
      providers: [ ReviewService ]
    })
    .compileComponents().then( () =>  {
      fixture = TestBed.createComponent(ReviewDetailComponent);
      component = fixture.componentInstance;
    })
  }));

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
