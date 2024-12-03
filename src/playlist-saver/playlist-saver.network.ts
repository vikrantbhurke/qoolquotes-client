import axios from "axios";
import { PlaylistIdSaverIdDTO } from "./dtos/common";

export const savePlaylist = async (
  playlistIdSaverIdDTO: PlaylistIdSaverIdDTO
) => {
  const { pid, sid } = playlistIdSaverIdDTO;
  const result = await axios.post(
    `/playlists-savers/playlistId/${pid}/saverId/${sid}`
  );

  return result.data;
};

export const checkPlaylistSaver = async (
  playlistIdSaverIdDTO: PlaylistIdSaverIdDTO
) => {
  const { pid, sid } = playlistIdSaverIdDTO;
  const result = await axios.get(
    `/playlists-savers/playlistId/${pid}/saverId/${sid}`
  );
  return result.data;
};

export const removePlaylist = async (
  playlistIdSaverIdDTO: PlaylistIdSaverIdDTO
) => {
  const { pid, sid } = playlistIdSaverIdDTO;

  const result = await axios.delete(
    `/playlists-savers/playlistId/${pid}/saverId/${sid}`
  );

  return result.data;
};

export const removePlaylistsBySaverId = async (sid: string) => {
  const result = await axios.delete(`/playlists-savers/saverId/${sid}`);
  return result.data;
};
