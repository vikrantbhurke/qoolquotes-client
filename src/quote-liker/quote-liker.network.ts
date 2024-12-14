import axios from "axios";
import { QuoteIdLikerIdDTO } from "./dtos/common";

export const likeQuote = async (likeQuoteDTO: QuoteIdLikerIdDTO) => {
  const { qid, lid } = likeQuoteDTO;

  const result = await axios.post(
    `/quotes-likers/quoteId/${qid}/likerId/${lid}`
  );

  return result.data;
};

export const countQuoteLikes = async (qid: string) => {
  const result = await axios.get(`/quotes-likers/quoteId/${qid}/likes`);
  return result.data;
};

export const checkQuoteLiker = async (
  checkQuoteLikerDTO: QuoteIdLikerIdDTO
) => {
  const { qid, lid } = checkQuoteLikerDTO;
  const result = await axios.get(
    `/quotes-likers/quoteId/${qid}/likerId/${lid}`
  );
  return result.data;
};

export const unlikeQuote = async (unlikeQuoteDTO: QuoteIdLikerIdDTO) => {
  const { qid, lid } = unlikeQuoteDTO;

  const result = await axios.delete(
    `/quotes-likers/quoteId/${qid}/likerId/${lid}`
  );

  return result.data;
};
