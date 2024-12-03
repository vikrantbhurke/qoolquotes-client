import axios from "axios";
import { GetTopicsDTO, SearchTopicsDTO } from "./dtos/read";
import { UpdateTopicDTO } from "./dtos/update";

export const countTopicQuotes = async (tid: string) => {
  const result = await axios.get(`/topics/${tid}/quotes`);
  return result.data;
};

export const getTopics = async (getTopicsDTO: GetTopicsDTO) => {
  const { page, sort, order, alpha } = getTopicsDTO;
  const params = new URLSearchParams();
  params.append("page", page.toString());
  if (sort) params.append("sort", sort);
  if (order) params.append("order", order);
  if (alpha) params.append("alpha", alpha);
  const request = { params };
  const result = await axios.get(`/topics`, request);
  return result.data;
};

export const searchTopics = async (searchTopicsDTO: SearchTopicsDTO) => {
  const { page, sort, order, search } = searchTopicsDTO;
  const params = new URLSearchParams();
  params.append("page", page.toString());
  if (sort) params.append("sort", sort);
  if (order) params.append("order", order);
  const request = { params };
  const result = await axios.get(`/topics/search/${search}`, request);
  return result.data;
};

export const updateTopicById = async (updateTopicByIdDTO: UpdateTopicDTO) => {
  const { tid, ...rest } = updateTopicByIdDTO;
  const result = await axios.patch(`/topics/${tid}`, rest);
  return result.data;
};

export const deleteTopicById = async (tid: string) => {
  const result = await axios.delete(`/topics/${tid}`);
  return result.data;
};
