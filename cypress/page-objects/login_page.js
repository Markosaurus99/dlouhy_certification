import { customElement } from "../helpers/custom_element";
import { HomePage } from "./home_page";
import { RegistrationPage } from "./registration_page";

export class LoginPage {
  constructor() {
    this.tegbUrl = Cypress.env("tegb_banking_url");
    this.registrationButton = customElement(".bold-link");
    this.usernameInput = customElement("[name='username']");
    this.passwordInput = customElement("[name='password']");
    this.loginButton = customElement("button[type='submit']");
    cy.intercept("/tegb/profile").as("profile.api");
    cy.intercept("/tegb/accounts").as("accounts.api");
  }
  openTegB() {
    cy.visit(this.tegbUrl);
    return this;
  }
  clickRegister() {
    this.registrationButton.get().click();
    return new RegistrationPage();
  }

  typeLoginUsername(username) {
    this.usernameInput.get().type(username);
    return this;
  }

  typeLoginPassword(password) {
    this.passwordInput.get().type(password);
    return this;
  }

  clickLogin() {
    this.loginButton.get().click();
    cy.wait("@accounts.api");
    cy.wait("@profile.api");
    return new HomePage;
  }
}
