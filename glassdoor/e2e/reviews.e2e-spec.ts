import { browser, protractor, element, by } from 'protractor';

import { ReviewsSection }     from './reviews.po';

describe('Review section of Company Detail Page', () => {

  let rSec:     ReviewsSection;
  let nReviews: number;

  beforeEach(async() => {
    rSec = new ReviewsSection();
  });

  it('should add and remove reviews', async() => {

    // Navigating to google page
    rSec.navigateTo("5a13f584a599139e9e648632");

    // Store number of Reviews at this time
    await rSec.noReviews().then(num => nReviews=num);

    expect(rSec.noReviews()).toBe(nReviews);

    // add a test review
    rSec.addReview(3, 'Test. Fairly happy about my internship here');
    expect(rSec.noReviews()).toBe(nReviews+1);

    // delete the added test review (will be the last index)
    rSec.delReview(nReviews);
    expect(rSec.noReviews()).toBe(nReviews);

  });

});
