import axios from "axios";
import { PlaylistIdLikerIdDTO } from "./dtos/common";

export const likePlaylist = async (
  playlistIdLikerIdDTO: PlaylistIdLikerIdDTO
) => {
  const { pid, lid } = playlistIdLikerIdDTO;

  const result = await axios.post(
    `/playlists-likers/playlistId/${pid}/likerId/${lid}`
  );

  return result.data;
};

export const countPlaylistLikes = async (pid: string) => {
  const result = await axios.get(`/playlists-likers/playlistId/${pid}/likes`);
  return result.data;
};

export const checkPlaylistLiker = async (
  playlistIdLikerIdDTO: PlaylistIdLikerIdDTO
) => {
  const { pid, lid } = playlistIdLikerIdDTO;
  const result = await axios.get(
    `/playlists-likers/playlistId/${pid}/likerId/${lid}`
  );
  return result.data;
};

export const unlikePlaylist = async (
  playlistIdLikerIdDTO: PlaylistIdLikerIdDTO
) => {
  const { pid, lid } = playlistIdLikerIdDTO;

  const result = await axios.delete(
    `/playlists-likers/playlistId/${pid}/likerId/${lid}`
  );

  return result.data;
};
