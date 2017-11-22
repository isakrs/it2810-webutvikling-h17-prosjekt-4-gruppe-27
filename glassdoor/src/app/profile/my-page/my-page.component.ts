import { Component, OnInit, Input } from '@angular/core';

import { ReviewService }  from '../../companies/reviews/shared/review.service';
import { Review }         from '../../companies/reviews/shared/review.model';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css'],
  providers: [ReviewService]
})
export class MyPageComponent implements OnInit {
	@Input() username: string;
  reviews: Review[];

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.getReviews();
  }

  getReviews() {
    this.reviewService
        .getReviewsOfUser()
        .then(reviews => this.reviews = reviews);
  }

}
