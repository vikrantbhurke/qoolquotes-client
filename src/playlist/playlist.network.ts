import axios from "axios";
import { ClonePlaylistDTO, CreatePlaylistDTO } from "./dtos/create";
import {
  GetPlaylistsByCreatorIdDTO,
  GetPlaylistsBySaverIdDTO,
  GetPlaylistsDTO,
  SearchPlaylistsDTO,
} from "./dtos/read";
import { UpdatePlaylistDTO } from "./dtos/update";

export const createPlaylist = async (createPlaylistDTO: CreatePlaylistDTO) => {
  const result = await axios.post(`/playlists`, createPlaylistDTO);
  return result.data;
};

export const clonePlaylist = async (clonePlaylistDTO: ClonePlaylistDTO) => {
  const { pid, cid } = clonePlaylistDTO;
  const result = await axios.post(
    `/playlists/playlistId/${pid}/creatorId/${cid}`
  );

  return result.data;
};

export const getPlaylists = async (getPlaylistsDTO: GetPlaylistsDTO) => {
  const { page, sort, order } = getPlaylistsDTO;
  const params = new URLSearchParams();
  params.append("page", page.toString());
  if (sort) params.append("sort", sort);
  if (order) params.append("order", order);
  const request = { params };
  const result = await axios.get(`/playlists`, request);
  return result.data;
};

export const searchPlaylists = async (
  searchPlaylistsDTO: SearchPlaylistsDTO
) => {
  const { page, sort, order, search } = searchPlaylistsDTO;
  const params = new URLSearchParams();
  params.append("page", page.toString());
  if (sort) params.append("sort", sort);
  if (order) params.append("order", order);
  const request = { params };
  const result = await axios.get(`/playlists/search/${search}`, request);
  return result.data;
};

export const getPlaylistsByCreatorId = async (
  getPlaylistsByCreatorIdDTO: GetPlaylistsByCreatorIdDTO
) => {
  const { page, cid, sort, order } = getPlaylistsByCreatorIdDTO;
  const params = new URLSearchParams();
  params.append("page", page.toString());
  if (sort) params.append("sort", sort);
  if (order) params.append("order", order);
  const request = { params };
  const result = await axios.get(`/playlists/creatorId/${cid}`, request);
  return result.data;
};

export const getPlaylistsBySaverId = async (
  getPlaylistsBySaverIdDTO: GetPlaylistsBySaverIdDTO
) => {
  const { page, sid, sort, order } = getPlaylistsBySaverIdDTO;
  const params = new URLSearchParams();
  params.append("page", page.toString());
  if (sort) params.append("sort", sort);
  if (order) params.append("order", order);
  const request = { params };
  const result = await axios.get(`/playlists/saverId/${sid}`, request);
  return result.data;
};

export const getPlaylistById = async (pid: string | undefined) => {
  const result = await axios.get(`/playlists/${pid}`);
  return result.data;
};

export const updatePlaylistById = async ({
  pid,
  updatePlaylistDTO,
}: {
  pid: string;
  updatePlaylistDTO: UpdatePlaylistDTO;
}) => {
  const result = await axios.patch(`/playlists/${pid}`, updatePlaylistDTO);
  return result.data;
};

export const deletePlaylistById = async (pid: string) => {
  const result = await axios.delete(`/playlists/${pid}`);
  return result.data;
};

export const deletePlaylistsByCreatorId = async (cid: string) => {
  const result = await axios.delete(`/playlists/creatorId/${cid}`);
  return result.data;
};
