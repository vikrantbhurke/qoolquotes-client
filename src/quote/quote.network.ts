import axios from "axios";
import {
  GetQuotesByAuthorIdDTO,
  GetQuotesByPlaylistIdDTO,
  GetQuotesByTopicIdDTO,
  SearchQuotesDTO,
} from "./dtos/read";
import { CreateQuoteDTO } from "./dtos/create";
import { UpdateQuoteDTO } from "./dtos/update";

export const createQuotes = async (createQuotesDTO: CreateQuoteDTO[]) => {
  const result = await axios.post(`/quotes/bulk`, createQuotesDTO);
  return result.data;
};

export const createQuote = async (createQuoteDTO: CreateQuoteDTO) => {
  const result = await axios.post(`/quotes`, createQuoteDTO);
  return result.data;
};

export const getRandomQuotes = async (pageSize: number) => {
  const params = new URLSearchParams();
  params.append("pageSize", pageSize.toString());
  const request = { params };
  const result = await axios.get(`/quotes/random`, request);
  return result.data;
};

export const searchQuotes = async (searchQuotesDTO: SearchQuotesDTO) => {
  const { page, search } = searchQuotesDTO;
  const params = new URLSearchParams();
  params.append("page", page.toString());
  const request = { params };
  const result = await axios.get(`/quotes/search/${search}`, request);
  return result.data;
};

export const getQuotesByTopicId = async (
  getQuotesByTopicIdDTO: GetQuotesByTopicIdDTO
) => {
  const { page, tid } = getQuotesByTopicIdDTO;
  const params = new URLSearchParams();
  params.append("page", page.toString());
  const request = { params };
  const result = await axios.get(`/quotes/topicId/${tid}`, request);
  return result.data;
};

export const getQuotesByAuthorId = async (
  getQuotesByAuthorIdDTO: GetQuotesByAuthorIdDTO
) => {
  const { page, aid } = getQuotesByAuthorIdDTO;
  const params = new URLSearchParams();
  params.append("page", page.toString());
  const request = { params };
  const result = await axios.get(`/quotes/authorId/${aid}`, request);
  return result.data;
};

export const getQuotesByPlaylistId = async (
  getQuotesByPlaylistIdDTO: GetQuotesByPlaylistIdDTO
) => {
  const { page, pid } = getQuotesByPlaylistIdDTO;
  const params = new URLSearchParams();
  params.append("page", page.toString());
  const request = { params };
  const result = await axios.get(`/quotes/playlistId/${pid}`, request);
  return result.data;
};

export const getQuoteById = async (qid: string | undefined) => {
  const result = await axios.get(`/quotes/${qid}`);
  return result.data;
};

export const updateQuoteById = async (updateQuoteByIdDTO: UpdateQuoteDTO) => {
  const { qid, ...rest } = updateQuoteByIdDTO;
  const result = await axios.patch(`/quotes/${qid}`, rest);
  return result.data;
};

export const deleteQuoteById = async (qid: string) => {
  const result = await axios.delete(`/quotes/${qid}`);
  return result.data;
};
