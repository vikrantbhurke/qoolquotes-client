import { Access } from "@/playlist/enums";

export interface UpdatePlaylistDTO {
  name: string;
  description: string;
  access: Access;
}
