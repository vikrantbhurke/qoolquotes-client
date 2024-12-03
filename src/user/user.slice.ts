import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Gender } from "./enums";

export interface UserState {
  gender: Gender;
}

const initialState: UserState = {
  gender: Gender.Male,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setGender: (state, action: PayloadAction<Gender>) => {
      state.gender = action.payload;
    },
  },
});

export const { setGender } = userSlice.actions;
export default userSlice.reducer;
