export class AccountsCreateApi {
  createAccount(accesstoken, startBalance) {
    return cy.request({
      method: "POST",
      url: Cypress.env("tegb_banking_api_url") + "/tegb/accounts/create",
      headers: {
        authorization: "Bearer " + accesstoken,
      },
      body: {
        startBalance: startBalance,
        type: "Test",
      },
    });
  }
}
