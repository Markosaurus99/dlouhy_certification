import { customElement } from "../helpers/custom_element";
import { EditProfileModal } from "./edit_profile_modal";
import { HeaderSection } from "./header_section";

export class HomePage extends HeaderSection {
  constructor() {
    super();
    this.editProfileButton = customElement(".profile-action");
  }

  clickEditProfile() {
    this.editProfileButton.get().click();
    return new EditProfileModal();
  }
}
