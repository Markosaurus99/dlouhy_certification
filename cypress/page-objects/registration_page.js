import { customElement } from "../helpers/custom_element";
import { LoginPage } from "./login_page";

export class RegistrationPage {
  constructor() {
    this.usernameInput = customElement("[name='username']");
    this.passwordInput = customElement("[name='password']");
    this.emailInput = customElement("[name='email']");
    this.submitButton = customElement("button[type='submit']");
  }

  typeUsername(username) {
    this.usernameInput.get().type(username);
    return this;
  }

  typePassword(password) {
    this.passwordInput.get().type(password);
    return this;
  }

  typeEmail(mail) {
    this.emailInput.get().type(mail);
    return this;
  }

  clickSubmit() {
    this.submitButton.get().click();
    cy.wait(1000);
    return new LoginPage();
  }
}
