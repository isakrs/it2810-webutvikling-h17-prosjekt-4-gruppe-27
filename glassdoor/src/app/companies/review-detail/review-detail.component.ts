import { Component, OnInit } from '@angular/core';

import { Review } from '../shared/review.model';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {
  review: Review;

  constructor() { }

  ngOnInit() {
  }

}
