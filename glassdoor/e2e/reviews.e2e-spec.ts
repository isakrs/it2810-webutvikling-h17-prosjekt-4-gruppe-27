import { browser, protractor, element, by } from 'protractor';

import { ReviewsSection }     from './reviews.po';
import { ProfilePage }        from './profile.po';

describe('Review section of Company Detail Page', () => {

  let rSec:     ReviewsSection;
  let nReviews: number;

  let pPage:    ProfilePage;
  const existingUser = {username: 'testRobot', password: 'passTestRobot'};

  beforeEach(async() => {
    rSec = new ReviewsSection();
    pPage = new ProfilePage();
  });

  it('should have reviews', async() => {

    // log in user
    pPage.navigateTo();
    pPage.login(existingUser);

    // Navigating to google's (_id) page
    rSec.navigateTo("5a15b9317d44bcad8b253a9a");

    // Store number of Reviews at this time
    await rSec.noReviews().then(num => nReviews=num);

    expect(rSec.noReviews()).toBe(nReviews);

  });

});
