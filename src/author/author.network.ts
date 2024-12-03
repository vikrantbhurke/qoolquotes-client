import axios from "axios";
import { GetAuthorsDTO, SearchAuthorsDTO } from "./dtos/read";
import { UpdateAuthorDTO } from "./dtos/update";

export const countAuthorQuotes = async (aid: string) => {
  const result = await axios.get(`/authors/${aid}/quotes`);
  return result.data;
};

export const getAuthors = async (getAuthorsDTO: GetAuthorsDTO) => {
  const { page, sort, order, alpha } = getAuthorsDTO;
  const params = new URLSearchParams();
  params.append("page", page.toString());
  if (sort) params.append("sort", sort);
  if (order) params.append("order", order);
  if (alpha) params.append("alpha", alpha);
  const request = { params };
  const result = await axios.get(`/authors`, request);
  return result.data;
};

export const searchAuthors = async (searchAuthorsDTO: SearchAuthorsDTO) => {
  const { page, sort, order, search } = searchAuthorsDTO;
  const params = new URLSearchParams();
  params.append("page", page.toString());
  if (sort) params.append("sort", sort);
  if (order) params.append("order", order);
  const request = { params };
  const result = await axios.get(`/authors/search/${search}`, request);
  return result.data;
};

export const updateAuthorById = async (
  updateAuthorByIdDTO: UpdateAuthorDTO
) => {
  const { aid, ...rest } = updateAuthorByIdDTO;
  const result = await axios.patch(`/authors/${aid}`, rest);
  return result.data;
};

export const deleteAuthorById = async (aid: string) => {
  const result = await axios.delete(`/authors/${aid}`);
  return result.data;
};
