import { browser, by, element } from 'protractor';

export class CompanyDetailPage {

  private header = element(by.css('h2'));

  navigateTo(id: number) {
    return browser.get('/detail/${number}');
  }

  getHeaderText() {
    return this.header.getText();
  }

}