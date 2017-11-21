import { browser, protractor, element, by } from 'protractor';

import { CompaniesPage } from './companies.po';

describe('Companies page', () => {

  let cPage: CompaniesPage;
  let numCompanies: number;

  beforeEach(async() => {
    cPage = new CompaniesPage();
  });

  it('should add and remove companies', async() => {

    cPage.navigateTo();

    // Store number of companies at this time
    await cPage.noCompanies().then(num => {
      numCompanies=num
    });

    expect(cPage.noCompanies()).toBeGreaterThan(0);

    // add a test company
    cPage.addCompany('e2e-test');
    expect(cPage.noCompanies()).toBe(numCompanies+1);

    // delete the added test company (will be the last index)
    cPage.delCompany(numCompanies);
    expect(cPage.noCompanies()).toBe(numCompanies);

  });

});
