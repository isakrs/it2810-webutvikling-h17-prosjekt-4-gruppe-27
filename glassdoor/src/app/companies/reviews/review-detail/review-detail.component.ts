import { Component, OnInit, Input }        from '@angular/core';

import { Review }    	from '../shared/review.model';
import { ReviewService } 	from '../shared/review.service';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {
  @Input() review: Review;

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
  }
}
