import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface QuoteState {
  page: number;
  qid: string;
}

const initialState: QuoteState = {
  page: 1,
  qid: "",
};

export const authorSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setQid: (state, action: PayloadAction<string>) => {
      state.qid = action.payload;
    },
  },
});

export const { setPage, setQid } = authorSlice.actions;

export default authorSlice.reducer;
