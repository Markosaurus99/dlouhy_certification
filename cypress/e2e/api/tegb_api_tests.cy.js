import { UserApi } from "../../api/tegb/login_api";
import { LoginPage } from "../../page-objects/login_page";
import { faker } from "@faker-js/faker";

describe("Send API with Objects", () => {
  let username;
  let password;
  
  beforeEach(() => {
    const randomEmail = faker.internet.exampleEmail();
    username = faker.internet.userName();
    password = faker.internet.password();

    new LoginPage()
      .openTegB()
      .clickRegister()
      .typeUsername(username)
      .typePassword(password)
      .typeEmail(randomEmail)
      .clickSubmit();

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
