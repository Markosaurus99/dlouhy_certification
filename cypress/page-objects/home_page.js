import { customElement } from "../helpers/custom_element";
import { EditProfileModal } from "./edit_profile_modal";
import { HeaderSection } from "./header_section";

export class HomePage extends HeaderSection {
  constructor() {
    super();
    this.editProfileButton = customElement(".profile-action");
    this.firstNameProfile = customElement("div[data-testid='name']");
    this.lastNameProfile = customElement("div[data-testid='surname']");
    this.emailProfile = customElement("div[data-testid='email']");
    this.telephoneProfile = customElement("div[data-testid='phone']");
    this.ageProfile = customElement("div[data-testid='age']");
    this.accountNumber = customElement("td[data-testid='account-number']");
    this.accountBalance = customElement("td[data-testid='account-balance']");
    this.accountType = customElement("td[data-testid='account-type']");
    this.profileDetaisTitle = customElement(
      "h2[data-testid='profile-details-title']"
    );
    this.accountsTitle = customElement("h2[data-testid='accounts-title']");
    this.addAccountButton = customElement(".account-action");
    this.accountNumberHeading = customElement(
      "th[data-testid='account-number-heading']"
    );
    this.accountBalanceHeading = customElement(
      "th[data-testid='account-balance-heading']"
    );
    this.accountTypeHeading = customElement(
      "th[data-testid='account-type-heading']"
    );
    this.nameColumn = customElement("div[data-testid='name'] strong");
    this.surnameColumn = customElement("div[data-testid='surname'] strong");
    this.emailColumn = customElement("div[data-testid='email'] strong");
    this.phoneColumn = customElement("div[data-testid='phone'] strong");
    this.ageColumn = customElement("div[data-testid='age'] strong");
  }

  clickEditProfile() {
    this.editProfileButton.get().click();
    return new EditProfileModal();
  }

  firstNameProfileHasText(firstName) {
    this.firstNameProfile.get().should("contain.text", firstName);
    return this;
  }

  lastNameProfileHasText(lastName) {
    this.lastNameProfile.get().should("contain.text", lastName);
    return this;
  }

  emailProfileHasText(email) {
    this.emailProfile.get().should("contain.text", email);
    return this;
  }

  telephoneProfileHasText(telephone) {
    this.telephoneProfile.get().should("contain.text", telephone);
    return this;
  }

  ageProfileHasText(age) {
    this.ageProfile.get().should("contain.text", age);
    return this;
  }

  accountNumberIsVisible() {
    this.accountNumber.get().should("be.visible");
    return this;
  }

  accountNumberHasText(accountNumber) {
    this.accountNumber.get().should("have.text", accountNumber);
    return this;
  }

  accountBalanceIsVisible() {
    this.accountBalance.get().should("be.visible");
    return this;
  }

  accountBalanceHasText(accountBalance) {
    this.accountBalance.get().should("contain.text", accountBalance);
    return this;
  }

  accountTypeIsVisible() {
    this.accountType.get().should("be.visible");
    return this;
  }

  accountTypeHasText(accountType) {
    this.accountType.get().should("have.text", accountType);
    return this;
  }
}
