import { browser, protractor, element, by } from 'protractor';

import { ReviewsSection }     from './reviews.po';

describe('Review section of Company Detail Page', () => {

  let rSec: ReviewsSection;

  beforeEach(() => {
    rSec = new ReviewsSection();
  });

  it('should add and remove reviews', () => {

    rSec.navigateTo(3);

    expect(rSec.noReviews()).toBe(0);

    rSec.addReview(3, 'Fairly happy about my internship here');
    expect(rSec.noReviews()).toBe(1);

    rSec.delReview(0);
    expect(rSec.noReviews()).toBe(0);

  });

});
