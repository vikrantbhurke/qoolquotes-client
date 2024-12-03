import axios from "axios";
import { CreateMessageDTO } from "./dtos/create";

export const createMessage = async (createMessageDTO: CreateMessageDTO) => {
  const result = await axios.post(`/messages`, createMessageDTO);
  return result.data;
};
