import { GetModelsDTO } from "@/global/dtos";

export interface GetQuotesByPlaylistIdDTO extends GetModelsDTO {
  pid: string;
}
