import { browser, protractor, element, by } from 'protractor';

import { CompaniesPage } from './companies.po';
import { ProfilePage } from './profile.po';

describe('Companies page', () => {

  let cPage:      CompaniesPage;
  let nCompanies: number;

  let pPage:      ProfilePage;
  const existingUser = {username: 'testRobot', password: 'passTestRobot'};

  beforeEach(async() => {
    cPage = new CompaniesPage();
    pPage = new ProfilePage();
  });

  it('should let user add and remove companies', async() => {

    // log in user
    pPage.navigateTo();
    pPage.login(existingUser);
    browser.sleep(10000);

    // navigate to companies page
    cPage.navigateTo();

    // Store number of companies at this time
    await cPage.noCompanies().then(num => {
      nCompanies=num
    });

    // check that there exists companies
    expect(cPage.noCompanies()).toBeGreaterThan(0);

    // add a test company
    cPage.addCompany('e2e-test');
    expect(cPage.noCompanies()).toBe(nCompanies+1);

    // delete the added test company (will be the last index)
    cPage.delCompany(nCompanies);
    expect(cPage.noCompanies()).toBe(nCompanies);

    // logout user
    pPage.logout();

  });

});
