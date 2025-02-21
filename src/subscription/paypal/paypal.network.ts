import axios from "axios";
import { EmailDTO } from "../dtos";

export const createSubscription = async () => {
  const result = await axios.post(`/paypal/create-subscription`, {});
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
