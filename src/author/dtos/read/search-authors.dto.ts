import { GetAuthorsDTO } from "./index";

interface SearchAuthorsDTO extends GetAuthorsDTO {
  search: string;
}

export type { SearchAuthorsDTO };
