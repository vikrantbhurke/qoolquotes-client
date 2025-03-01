import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SubscriptionState {
  sessionId: any;
}

const initialState: SubscriptionState = {
  sessionId: null,
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    setSessionId: (state, action: PayloadAction<any>) => {
      state.sessionId = action.payload;
    },
  },
});

export const { setSessionId } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
