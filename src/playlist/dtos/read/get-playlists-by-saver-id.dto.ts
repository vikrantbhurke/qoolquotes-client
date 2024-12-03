import { GetPlaylistsDTO } from "./get-playlists.dto";

export interface GetPlaylistsBySaverIdDTO extends GetPlaylistsDTO {
  sid: string;
}
