import { AppPage } from './app.po';

describe('glassdoor App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to our Company Insider');
  });
});
