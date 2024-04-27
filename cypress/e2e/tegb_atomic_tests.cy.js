import { EditProfileModal } from "../page-objects/edit_profile_modal";
import { HomePage } from "../page-objects/home_page";
import { LoginPage } from "../page-objects/login_page";
import { MenuSection } from "../page-objects/menu_section";

describe("Users page atomic tests", { testIsolation: false }, () => {
  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();

    new LoginPage()
      .openTegB()
      .typeLoginUsername(Cypress.env("tegb_username"))
      .typeLoginPassword(Cypress.env("tegb_password"))
      .clickLogin();
  });
  context("Header section tests", () => {
    it("Page title is visible", () => {
      new HomePage().pageTitle.isVisible();
    });
    it("Page title has text", () => {
      new HomePage().pageTitle.hasText("TEG#B Dashboard");
    });
    it("TegB logo is visible", () => {
      new HomePage().tegBLogo.isVisible();
    });

    it("Logout button is visible", () => {
      new HomePage().logoutButton.isVisible();
    });

    it("Logout button has text", () => {
      new HomePage().logoutButton.hasText("Odhlásit se");
    });
  });
  context("Menu tests", () => {
    it("Home button is visible", () => {
      new MenuSection().homeButton.isVisible();
    });
    it("Home button has text", () => {
      new MenuSection().homeButton.hasText("Domů");
    });

    it("Accounts button is visible", () => {
      new MenuSection().accountsButton.isVisible();
    });

    it("Accounts button has text", () => {
      new MenuSection().accountsButton.hasText("Účty");
    });

    it("Transactions button is visible", () => {
      new MenuSection().transactionsButton.isVisible();
    });

    it("Transactions button has text", () => {
      new MenuSection().transactionsButton.hasText("Transakce");
    });

    it("Support button is visible", () => {
      new MenuSection().supportButton.isVisible();
    });

    it("Support button has text", () => {
      new MenuSection().supportButton.hasText("Podpora");
    });
  });

  context("Dashboard content tests", () => {
    it("Profile details title is visible", () => {
      new HomePage().profileDetaisTitle.isVisible();
    });

    it("Profile details title has text", () => {
      new HomePage().profileDetaisTitle.hasText("Detaily Profilu");
    });

    it("Accounts title is visible", () => {
      new HomePage().accountsTitle.isVisible();
    });

    it("Accounts title has text", () => {
      new HomePage().accountsTitle.hasText("Účty");
    });

    it("Edit profile button is visible", () => {
      new HomePage().editProfileButton.isVisible();
    });
    it("Edit profile button has text", () => {
      new HomePage().editProfileButton.hasText("Upravit profil");
    });
    it("Click edit profile, form and cancel changes button is visible", () => {
      new HomePage().clickEditProfile().editProfileForm.isVisible();
      new EditProfileModal().cancelChangesButton.isVisible();
      new EditProfileModal().clickCancelChangesButton();
    });
    it("Add account button is visible", () => {
      new HomePage().addAccountButton.isVisible();
    });

    it("Add account button has text", () => {
      new HomePage().addAccountButton.hasText("Přidat účet");
    });

    it("Account number heading is visible", () => {
      new HomePage().accountNumberHeading.isVisible();
    });

    it("Account number heading has text", () => {
      new HomePage().accountNumberHeading.hasText("Číslo účtu");
    });

    it("Account balance heading is visible", () => {
      new HomePage().accountBalanceHeading.isVisible();
    });

    it("Account balance heading has text", () => {
      new HomePage().accountBalanceHeading.hasText("Zůstatek");
    });

    it("Account type heading is visible", () => {
      new HomePage().accountTypeHeading.isVisible();
    });

    it("Account type heading has text", () => {
      new HomePage().accountTypeHeading.hasText("Typ účtu");
    });

    it("Name column is visible", () => {
      new HomePage().nameColumn.isVisible();
    });

    it("Name column has text", () => {
      new HomePage().nameColumn.hasText("Jméno:");
    });

    it("Surname column is visible", () => {
      new HomePage().surnameColumn.isVisible();
    });

    it("Surname column has text", () => {
      new HomePage().surnameColumn.hasText("Příjmení:");
    });

    it("Email column is visible", () => {
      new HomePage().emailColumn.isVisible();
    });

    it("Email column has text", () => {
      new HomePage().emailColumn.hasText("Email:");
    });

    it("Telephone column is visible", () => {
      new HomePage().phoneColumn.isVisible();
    });

    it("Telephone column has text", () => {
      new HomePage().phoneColumn.hasText("Telefon:");
    });
    it("Age column is visible", () => {
      new HomePage().ageColumn.isVisible();
    });

    it("Age column has text", () => {
      new HomePage().ageColumn.hasText("Věk:");
    });
  });
});
