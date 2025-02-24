import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SubscriptionState {
  subscription: any;
}

const initialState: SubscriptionState = {
  subscription: null,
};

// @ts-ignore
const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    setSubscription: (state, action: PayloadAction<any>) => {
      state.subscription = action.payload;
    },
  },
});

export const { setSubscription } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
