import { GetModelsDTO } from "@/global/dtos";

export interface GetQuotesByTopicIdDTO extends GetModelsDTO {
  tid: string;
}
