import axios from "axios";
import { EmailDTO, SubscriptionIdDTO, UserIdDTO } from "../dtos";

export const createPayPalSubscription = async (userIdDTO: UserIdDTO) => {
  const result = await axios.post(`/paypal/create-subscription`, userIdDTO);
  return result.data;
};

export const getPayPalSubscription = async (emailDTO: EmailDTO) => {
  const result = await axios.post(`/paypal/get-subscription`, emailDTO);
  return result.data;
};

export const suspendPayPalSubscription = async (
  subscriptionIdDTO: SubscriptionIdDTO
) => {
  const result = await axios.post(
    `/paypal/suspend-subscription`,
    subscriptionIdDTO
  );
  return result.data;
};

export const activatePayPalSubscription = async (
  subscriptionIdDTO: SubscriptionIdDTO
) => {
  const result = await axios.post(
    `/paypal/activate-subscription`,
    subscriptionIdDTO
  );
  return result.data;
};

export const cancelPayPalSubscription = async (
  subscriptionIdDTO: SubscriptionIdDTO
) => {
  const result = await axios.post(
    `/paypal/cancel-subscription`,
    subscriptionIdDTO
  );
  return result.data;
};
