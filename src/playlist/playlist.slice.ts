import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Access } from "./enums";

export interface PlaylistState {
  page: number;
  tab: string;
  access: Access;
}

const initialState: PlaylistState = {
  page: 1,
  tab: "All",
  access: Access.Public,
};

export const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setTab: (state, action: PayloadAction<string>) => {
      state.tab = action.payload;
    },
    setAccess: (state, action: PayloadAction<Access>) => {
      state.access = action.payload;
    },
  },
});

export const { setPage, setTab, setAccess } = playlistSlice.actions;

export default playlistSlice.reducer;
