import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Alpha, Order } from "@/global/enums";

export interface TopicState {
  page: number;
  sort: string;
  order: Order;
  alpha: Alpha;
}

const initialState: TopicState = {
  page: 1,
  sort: "name",
  order: Order.Ascending,
  alpha: Alpha.All,
};

export const topicSlice = createSlice({
  name: "topic",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    setOrder: (state, action: PayloadAction<Order>) => {
      state.order = action.payload;
    },
    setAlpha: (state, action: PayloadAction<Alpha>) => {
      state.alpha = action.payload;
    },
  },
});

export const { setPage, setSort, setOrder, setAlpha } = topicSlice.actions;

export default topicSlice.reducer;
