import axios from "axios";
import { PlaylistIdQuoteIdDTO } from "./dtos/common";

export const addQuoteToPlaylist = async (
  playlistIdQuoteIdDTO: PlaylistIdQuoteIdDTO
) => {
  const { pid, qid } = playlistIdQuoteIdDTO;

  const result = await axios.post(
    `/playlists-quotes/playlistId/${pid}/quoteId/${qid}`
  );

  return result.data;
};

export const countPlaylistQuotes = async (pid: string) => {
  const result = await axios.get(`/playlists-quotes/playlistId/${pid}/quotes`);
  return result.data;
};

export const checkPlaylistQuote = async (
  playlistIdQuoteIdDTO: PlaylistIdQuoteIdDTO
) => {
  const { pid, qid } = playlistIdQuoteIdDTO;
  const result = await axios.get(
    `/playlists-quotes/playlistId/${pid}/quoteId/${qid}`
  );
  return result.data;
};

export const removeQuoteFromPlaylist = async (
  playlistIdQuoteIdDTO: PlaylistIdQuoteIdDTO
) => {
  const { pid, qid } = playlistIdQuoteIdDTO;

  const result = await axios.delete(
    `/playlists-quotes/playlistId/${pid}/quoteId/${qid}`
  );

  return result.data;
};
