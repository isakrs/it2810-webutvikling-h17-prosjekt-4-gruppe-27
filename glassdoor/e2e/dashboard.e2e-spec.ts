import { CompanyDetailPage } from './company-detail.po';
import { DashboardPage } from './dashboard.po';
import { browser, protractor, element, by } from 'protractor';

describe('Company search on Dashboard Page', () => {

  let dPage: DashboardPage;
  let cdPage: CompanyDetailPage;

  beforeEach(() => {
    dPage = new DashboardPage();
    cdPage = new CompanyDetailPage();
  });

  it('should display matching search results', () => {
    dPage.navigateTo();
    dPage.searchFor('Kolo');
    browser.sleep(1000);

    expect(dPage.getSearchResults()).toEqual([
      {index: 0, text: 'Kolonial.no'},
    ]);
  });

  it('should navigate from search result to company details', () => {
    dPage.navigateTo();
    dPage.searchFor('Kolo');
    browser.sleep(1000);

    dPage.clickSearchResult(0);

    expect(cdPage.getHeaderText()).toBe('Kolonial.no details!');
  });

});
