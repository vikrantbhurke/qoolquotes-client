import axios from "axios";
import { EmailDTO, UserIdDTO } from "../dtos";

export const createSubscription = async (userIdDTO: UserIdDTO) => {
  const result = await axios.post(`/paypal/create-subscription`, { userIdDTO });
  return result.data;
};

export const getSubscription = async (emailDTO: EmailDTO) => {
  const result = await axios.post(`/paypal/get-subscription`, emailDTO);
  return result.data;
};

export const suspendSubscription = async (emailDTO: EmailDTO) => {
  const result = await axios.post(`/paypal/suspend-subscription`, emailDTO);
  return result.data;
};

export const activateSubscription = async (emailDTO: EmailDTO) => {
  const result = await axios.post(`/paypal/activate-subscription`, emailDTO);
  return result.data;
};

export const cancelSubscription = async (emailDTO: EmailDTO) => {
  const result = await axios.post(`/paypal/cancel-subscription`, emailDTO);
  return result.data;
};
