import { customElement } from "../helpers/custom_element";
import { LoginPage } from "./login_page";

export class HeaderSection {
  constructor() {
    this.logoutButton = customElement(".logout-link");
    this.pageTitle = customElement(".app-title");
    this.tegBLogo = customElement("img[alt='Tredgate Logo']");
  }

  clickLogout() {
    this.logoutButton.get().click();
    return new LoginPage();
  }
}
