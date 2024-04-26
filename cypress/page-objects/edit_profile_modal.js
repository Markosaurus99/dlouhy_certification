import { customElement } from "../helpers/custom_element";
import { HomePage } from "./home_page";

export class EditProfileModal {
  constructor() {
    this.firstnameInput = customElement("[data-testid='chage-name-input']");
    this.lastnameInput = customElement("[data-testid='chage-surname-input']");
    this.emailInput = customElement("[data-testid='chage-email-input']");
    this.phoneNumberInput = customElement("[data-testid='chage-phone-input']");
    this.ageInput = customElement("[data-testid='chage-age-input']");
    this.saveChangesButton = customElement("button[type='submit']");
  }

  typeFirstname(firstname) {
    this.firstnameInput.get().type(firstname);
    return this;
  }

  typeLastname(lastname) {
    this.lastnameInput.get().type(lastname);
    return this;
  }

  typeEmail(email) {
    this.emailInput.get().type(email);
    return this;
  }

  typePhoneNumber(phone) {
    this.phoneNumberInput.get().type(phone);
    return this;
  }

  typeAge(age) {
    this.ageInput.get().type(age);
    return this;
  }

  clickSaveChanges() {
    this.saveChangesButton.get().click();
    return new HomePage();
  }
}
