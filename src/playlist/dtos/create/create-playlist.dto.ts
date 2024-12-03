import { Access } from "@/playlist/enums";

export interface CreatePlaylistDTO {
  name: string;
  description: string;
  creatorId: string;
  quoteId: string;
  access: Access;
}
