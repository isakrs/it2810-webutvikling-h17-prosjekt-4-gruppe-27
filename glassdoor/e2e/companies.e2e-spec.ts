import { browser, protractor, element, by } from 'protractor';

import { CompaniesPage } from './companies.po';
import { ProfilePage }   from './profile.po';

describe('Companies page', () => {

  let cPage:      CompaniesPage;
  let nCompanies: number;

  let pPage:      ProfilePage;
  const existingUser = {username: 'testRobot', password: 'passTestRobot'};

  beforeEach(async() => {
    cPage = new CompaniesPage();
    pPage = new ProfilePage();
  });

  it('should let user add companies', async() => {

    // log in user
    pPage.navigateTo();
    pPage.login(existingUser);
    browser.sleep(1000);

    // navigate to companies page
    cPage.navigateTo();

    // check that there exists companies
    expect(cPage.noCompanies()).toBeGreaterThan(0);

    // add a test company
    cPage.addCompany('e2eTestCompany');

    // logout user
    pPage.logout();

  });

});
