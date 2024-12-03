import { GetPlaylistsDTO } from "./get-playlists.dto";

export interface GetPlaylistsByCreatorIdDTO extends GetPlaylistsDTO {
  cid: string;
}
