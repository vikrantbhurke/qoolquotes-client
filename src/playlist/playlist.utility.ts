import Validator from "password-validator";
import { PlaylistError } from "./playlist.error";

class PlaylistUtility {
  validateName = (name: string) => {
    const nameSchema = new Validator();
    nameSchema.is().min(3).is().max(30);
    return nameSchema.validate(name) ? null : PlaylistError.Name;
  };

  validateDescription = (description: string) => {
    const descriptionSchema = new Validator();
    descriptionSchema.is().max(100);
    return descriptionSchema.validate(description)
      ? null
      : PlaylistError.Description;
  };

  getNameColor = (length: number) => {
    if (length < 3 || length > 30) return "red";
    return "green";
  };

  getDescriptionColor = (length: number) => {
    if (length > 100) return "red";
    return "green";
  };
}

export default PlaylistUtility;
export const playlistUtility = new PlaylistUtility();
