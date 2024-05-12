import { AccountsCreateApi } from "../api/tegb/accounts_create_api";
import { UserApi } from "../api/tegb/login_api";
import { LoginPage } from "../page-objects/login_page";
import { faker } from "@faker-js/faker";

describe("TegB Banking App E2E Test", { tags: "@smoke" }, () => {
  it("TegB register, create account, login and edit profile", () => {
    let startBalance = 1000;
    let type = "Test";
    const randomEmail = faker.internet.exampleEmail();
    const randomUsername = faker.internet.userName();
    const randomPassword = faker.internet.password();
    const randomFirstname = faker.person.firstName();
    const randomLastname = faker.person.lastName();
    const randomAge = faker.number.int({ min: 0, max: 100 });
    const randomPhoneNumber = faker.phone.number();

    new LoginPage()
      .openTegB()
      .clickRegister()
      .typeUsername(randomUsername)
      .typePassword(randomPassword)
      .typeEmail(randomEmail)
      .clickSubmit()
      .registrationSuccessfullIsVisible();

    const userApi = new UserApi();
    const accountsApi = new AccountsCreateApi();
    userApi.login(randomUsername, randomPassword).as("user_id");
    userApi.login(randomUsername, randomPassword).then((response) => {
      expect(response.status).to.eq(201);
      const accessTokenValue = response.body.access_token;
      cy.setCookie("access_token", accessTokenValue);
      cy.get("@user_id").then(() => {
        accountsApi
          .createAccount(accessTokenValue, type, startBalance)
          .then((response) => {
            expect(response.status).to.eq(201);
          });
      });
    });

    new LoginPage()
      .openTegB()
      .typeLoginUsername(randomUsername)
      .typeLoginPassword(randomPassword)
      .clickLogin()
      .clickEditProfile()
      .typeFirstname(randomFirstname)
      .typeLastname(randomLastname)
      .typeEmail(randomEmail)
      .typePhoneNumber(randomPhoneNumber)
      .typeAge(randomAge)
      .clickSaveChanges()
      .firstNameProfileHasText(randomFirstname)
      .lastNameProfileHasText(randomLastname)
      .emailProfileHasText(randomEmail)
      .telephoneProfileHasText(randomPhoneNumber)
      .ageProfileHasText(randomAge)
      .accountNumberIsVisible()
      .accountBalanceIsVisible()
      .accountTypeIsVisible()
      .accountBalanceHasText(startBalance)
      .accountTypeHasText(type)
      .clickLogout();
  });
});
