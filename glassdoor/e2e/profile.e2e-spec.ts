import { browser } from 'protractor';

import { ProfilePage } from './profile.po';

describe('glassdoor App', () => {
  let page: ProfilePage;

  const existingUser = {username: 'kurt', password: 'kurt'};
  const newUser = {username: makeRandomString(20), password: makeRandomString(20)};

  beforeEach(() => {
    page = new ProfilePage();
  });

  it('should log in and welcome existing user', () => {
    page.navigateTo();
    page.login(existingUser);

    browser.sleep(1000);

    expect(page.getWelcomeMessage())
    .toEqual(`Welcome ${existingUser.username}`);

    // TODO: log out user
  });

  it('should register and welcome new user', () => {
    page.navigateTo();
    page.register(newUser);

    browser.sleep(1000);

    expect(page.getWelcomeMessage())
    .toEqual(`Welcome ${newUser.username}`);

    // TODO: log out user
  });

});

function makeRandomString(lenStr) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < lenStr; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
