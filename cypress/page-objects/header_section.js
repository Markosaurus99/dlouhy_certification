import { customElement } from "../helpers/custom_element";
import { LoginPage } from "./login_page";

export class HeaderSection {
  constructor() {
    this.logoutButton = customElement(".logout-link");
  }

  clickLogout() {
    this.logoutButton.get().click();
    return new LoginPage();
  }
}
