import { GetPlaylistsDTO } from "./get-playlists.dto";

export interface SearchPlaylistsDTO extends GetPlaylistsDTO {
  search: string;
}
