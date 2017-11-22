import { Component, OnInit, Input } from '@angular/core';

import { ReviewService } from '../../companies/reviews/shared/review.service';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {
	@Input() username: string;

  constructor() { }

  ngOnInit() {
  }

  getReviews() {
    // Use get reviews
  }

}
