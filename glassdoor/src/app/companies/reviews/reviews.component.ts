import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Review }           from './shared/review.model';
import { ReviewService }    from './shared/review.service';
import { Company }          from '../shared/company.model';

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input() company: Company;
  reviews: Review[];
  selectedReview: Review;

  constructor(
    private reviewService: ReviewService,
    private route: ActivatedRoute
  ) { }

  add(rating: number, comment: string): void {
    comment = comment.trim();
    if (!(rating >= 1.0 && rating <= 5.0  && comment)) { return; }
    this.reviewService.create(rating, comment, this.company._id)
      .then(review => {
        this.reviews.push(review);
        this.selectedReview = null;
      });
  }

  delete(review: Review): void {
    this.reviewService
        .delete(review._id)
        .then(() => {
          this.reviews = this.reviews.filter(r => r !== review);
          if (this.selectedReview === review) { this.selectedReview = null; }
        });
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.reviewService.getReviews(params.get('_id')))
      .subscribe(reviews => this.reviews = reviews);
  }

  onSelect(review: Review): void {
    this.selectedReview = review;
  }
}