import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterObject {
  name: string;
  id: string;
}

export interface QuoteState {
  page: number;
  qid: string;
  filterObject: FilterObject;
}

const initialState: QuoteState = {
  page: 1,
  qid: "",
  filterObject: { name: "", id: "" },
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
    setFilterObject: (state, action: PayloadAction<FilterObject>) => {
      state.filterObject = action.payload;
    },
  },
});

export const { setPage, setQid, setFilterObject } = authorSlice.actions;

export default authorSlice.reducer;
