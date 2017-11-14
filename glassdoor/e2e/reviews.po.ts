import { browser, by, element } from 'protractor';

export class ReviewsSection {

  private reviews = element.all(by.css('.reviews li'));
  private delBttns = element.all(by.css('.delete'));

  private reviewInputRating = element(by.css('#review-input-rating'));
  private reviewInputComment = element(by.css('#review-input-comment'));
  private reviewInputSubmit = element(by.css('.add-review'));

  navigateTo(id: number) {
    return browser.get('/detail/${number}');
  }

  noReviews() {
    return this.reviews.count();
  }

  addReview(rating: number, comment: string) {
    this.reviewInputRating.sendKeys(rating);
    this.reviewInputComment.sendKeys(comment);
    this.reviewInputSubmit.click();
  }

  delReview(index: number) {
    this.delBttns.get(index).click();
  }

}
