import { browser, by, element } from 'protractor';

export class CompanyDetailPage {

  private resultTitle = element.all(by.css('#detail-title'));


  navigateTo(id: number) {
    return browser.get('/detail/${number}');
  }

  getResultTitle() {
    return this.resultTitle.getText();
  }

}
