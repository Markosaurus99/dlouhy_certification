import { UserApi } from "../../api/tegb/login_api";

describe("Send API with Objects", () => {
  let username;
  let password;

  beforeEach(() => {
    username = Cypress.env("tegb_username");
    password = Cypress.env("tegb_password");
    cy.log(username);
    cy.visit(Cypress.env("tegb_banking_url"));
  });

  it("API Login to TEGB", () => {
    const userApi = new UserApi();
    userApi.login(username, password).as("login_response");
    cy.get("@login_response").then((response) => {
      cy.setCookie("access_token", response.body.access_token);
    });
    cy.getCookie("access_token").should("exist");
  });
});
