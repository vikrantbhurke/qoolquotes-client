import { Order } from "../enums";

export interface GetModelsDTO {
  page: number;
  sort?: string;
  order?: Order;
}
