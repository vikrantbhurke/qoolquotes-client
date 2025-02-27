import axios from "axios";
import { SubscriptionIdDTO, UserIdDTO } from "../dtos";

export const createStripeSubscription = async (userIdDTO: UserIdDTO) => {
  const result = await axios.post(`/stripe/create-subscription`, userIdDTO);
  return result.data;
};

export const getStripeSubscription = async (
  subscriptionIdDTO: SubscriptionIdDTO
) => {
  const result = await axios.post(
    `/stripe/get-subscription`,
    subscriptionIdDTO
  );
  return result.data;
};

export const suspendStripeSubscription = async (
  subscriptionIdDTO: SubscriptionIdDTO
) => {
  const result = await axios.post(
    `/stripe/suspend-subscription`,
    subscriptionIdDTO
  );
  return result.data;
};

export const activateStripeSubscription = async (
  subscriptionIdDTO: SubscriptionIdDTO
) => {
  const result = await axios.post(
    `/stripe/activate-subscription`,
    subscriptionIdDTO
  );
  return result.data;
};

export const cancelStripeSubscription = async (
  subscriptionIdDTO: SubscriptionIdDTO
) => {
  const result = await axios.post(
    `/stripe/cancel-subscription`,
    subscriptionIdDTO
  );
  return result.data;
};
