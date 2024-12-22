import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Access, Sort } from "./enums";
import { Order } from "@/global/enums";

export interface PlaylistState {
  page: number;
  tab: string;
  access: Access;
  sort: string;
  order: Order;
}

const initialState: PlaylistState = {
  page: 1,
  tab: "All",
  access: Access.Public,
  sort: Sort.Date,
  order: Order.Descending,
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
    setSort: (state, action: PayloadAction<Sort>) => {
      state.sort = action.payload;
    },
    setOrder: (state, action: PayloadAction<Order>) => {
      state.order = action.payload;
    },
  },
});

export const { setPage, setTab, setAccess, setSort, setOrder } =
  playlistSlice.actions;

export default playlistSlice.reducer;
