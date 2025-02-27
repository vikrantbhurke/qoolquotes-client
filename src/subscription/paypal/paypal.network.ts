import axios from "axios";
import { SubscriptionIdDTO, UserIdDTO } from "../dtos";

export const createPayPalSubscription = async (userIdDTO: UserIdDTO) => {
  const result = await axios.post(`/paypal/create-subscription`, userIdDTO);
  return result.data;
};

export const getPayPalSubscription = async (
  subscriptionIdDTO: SubscriptionIdDTO
) => {
  const result = await axios.post(
    `/paypal/get-subscription`,
    subscriptionIdDTO
  );
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
