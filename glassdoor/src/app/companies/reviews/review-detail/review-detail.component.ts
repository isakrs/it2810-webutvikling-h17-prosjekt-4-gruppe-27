import 'rxjs/add/operator/switchMap';

import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Review }    	from '../shared/review.model';
import { ReviewService } 	from '../shared/review.service';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {
  review: Review;

  constructor(
    private reviewService: ReviewService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.reviewService
                                        .getReviews(+params.get('id')))
                                        // id is id of Company, ie idCompany
                                        // from url: /detail/{id}
      .subscribe(review => this.review = review);
  }

  save(): void {
    this.reviewService.update(this.review);
  }
}
