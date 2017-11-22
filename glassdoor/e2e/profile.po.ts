import { browser, by, element } from 'protractor';

export class ProfilePage {

  private usernameInput = element(by.css("#username"));
  private passwordInput = element(by.css("#password"));
  private loginButton = element(by.css("#login"));
  private registerButton = element(by.css("#register"));

  navigateTo() {
    return browser.get('/profile');
  }

  login(userObj) {
    this.usernameInput.sendKeys(userObj[username]);
    this.passwordInput.sendKeys(userObj[password]);
    this.loginButton.click();
  }

  register(userObj) {
    this.usernameInput.sendKeys(userObj[username]);
    this.passwordInput.sendKeys(userObj[password]);
    this.registerButton.click();
  }
}
