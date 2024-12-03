import axios from "axios";
import { CreateCitedQuoteDTO } from "./dtos/create";

export const createCitedQuote = async (
  createCitedQuoteDTO: CreateCitedQuoteDTO
) => {
  const result = await axios.post(`/cited-quotes`, createCitedQuoteDTO);
  return result.data;
};
