import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Role } from "./enums";

export interface AuthState {
  auth: any;
  subscribed: boolean;
  subscription: any;
}

const initialState: AuthState = {
  auth: localStorage.getItem("auth")
    ? // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'state' implicitly has an 'any' type.
      JSON.parse(localStorage.getItem("auth"))
    : {
        id: null,
        role: Role.Public,
      },
  subscribed: false,
  subscription: null,
};

// @ts-ignore
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<any>) => {
      state.auth = action.payload;
      localStorage.setItem("auth", JSON.stringify(action.payload));
    },
    setSubscribed: (state, action: PayloadAction<boolean>) => {
      state.subscribed = action.payload;
    },
    setSubscription: (state, action: PayloadAction<any>) => {
      state.subscription = action.payload;
    },
    signOut: (state) => {
      state.auth = {
        id: null,
        role: Role.Public,
      };
      localStorage.removeItem("auth");
    },
  },
});

export const { setAuth, setSubscribed, setSubscription, signOut } =
  authSlice.actions;

export default authSlice.reducer;
