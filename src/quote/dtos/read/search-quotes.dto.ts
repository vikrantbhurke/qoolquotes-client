import { GetModelsDTO } from "@/global/dtos";

interface SearchQuotesDTO extends GetModelsDTO {
  search: string;
}

export type { SearchQuotesDTO };
