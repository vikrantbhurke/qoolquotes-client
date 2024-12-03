import { GetTopicsDTO } from "./index";

interface SearchTopicsDTO extends GetTopicsDTO {
  search: string;
}

export type { SearchTopicsDTO };
