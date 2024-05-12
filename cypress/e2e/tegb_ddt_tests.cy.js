import { AccountsCreateApi } from "../api/tegb/accounts_create_api";
import { UserApi } from "../api/tegb/login_api";
import { LoginPage } from "../page-objects/login_page";
import { faker } from "@faker-js/faker";
import accountBalanceData from "../fixtures/account_balance_data.json";

describe("TegB Banking app DDT Tests", () => {
  let randomEmail;
  let randomUsername;
  let randomPassword;

  beforeEach(() => {
    randomEmail = faker.internet.exampleEmail();
    randomUsername = faker.internet.userName();
    randomPassword = faker.internet.password();
    new LoginPage()
      .openTegB()
      .clickRegister()
      .typeUsername(randomUsername)
      .typePassword(randomPassword)
      .typeEmail(randomEmail)
      .clickSubmit();
  });
  accountBalanceData.forEach((accountData) => {
    it(`DDT test for account balance: ${accountData.startBalance}`, () => {
      let type = "Test";
      const startBalance = accountData.startBalance;
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
        .accountBalanceHasText(startBalance)
        .accountTypeHasText(type);
    });
  });
});
