import { GetModelsDTO } from "@/global/dtos";

interface GetAuthorsDTO extends GetModelsDTO {
  alpha: string;
}

export type { GetAuthorsDTO };
