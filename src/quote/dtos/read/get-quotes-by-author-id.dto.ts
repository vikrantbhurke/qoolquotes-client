import { GetModelsDTO } from "@/global/dtos";

export interface GetQuotesByAuthorIdDTO extends GetModelsDTO {
  aid: string;
}
