import { Access } from "@/playlist/enums";

export interface UpdatePlaylistDTO {
  pid: string;
  name: string;
  description: string;
  access: Access;
}
