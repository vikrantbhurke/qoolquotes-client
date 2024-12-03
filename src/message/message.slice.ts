import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Reason } from "./enums";

export interface PlaylistState {
  reason: Reason;
}

const initialState: PlaylistState = {
  reason: Reason["Make A Suggestion"],
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setReason: (state, action: PayloadAction<Reason>) => {
      state.reason = action.payload;
    },
  },
});

export const { setReason } = messageSlice.actions;

export default messageSlice.reducer;
