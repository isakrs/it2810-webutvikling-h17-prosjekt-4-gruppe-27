import { CompaniesPage } from './companies.po';
import { browser, protractor, element, by } from 'protractor';

describe('Companies page', () => {

  let cPage: CompaniesPage;

  beforeEach(() => {
    cPage = new CompaniesPage();
  });

  it('should add and remove companies', () => {

    cPage.navigateTo();

    expect(cPage.noCompanies()).toBe(9);

    cPage.addCompany('Cognite');
    expect(cPage.noCompanies()).toBe(10);

    cPage.delCompany(9);
    expect(cPage.noCompanies()).toBe(9);

  });

});