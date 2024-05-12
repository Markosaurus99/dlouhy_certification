import { customElement } from "../helpers/custom_element";
import { HomePage } from "./home_page";

export class MenuSection extends HomePage {
  constructor() {
    super();
    this.homeButton = customElement("li:nth-child(1)");
    this.accountsButton = customElement("li:nth-child(2)");
    this.transactionsButton = customElement("li:nth-child(3)");
    this.supportButton = customElement("li:nth-child(4)");
  }
}
