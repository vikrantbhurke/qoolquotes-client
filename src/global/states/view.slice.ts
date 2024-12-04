import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ViewState {
  search: string;
  isLoadingOverlayVisible: boolean;
  isSearchbarVisible: boolean;
  focusedInput: string;
}

const initialState: ViewState = {
  search: "",
  isLoadingOverlayVisible: false,
  isSearchbarVisible: false,
  focusedInput: "",
};

export const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setIsSearchbarVisible: (state, action: PayloadAction<boolean>) => {
      state.isSearchbarVisible = action.payload;
    },
    setIsLoadingOverlayVisible: (state, action: PayloadAction<boolean>) => {
      state.isLoadingOverlayVisible = action.payload;
    },
    setFocusedInput: (state, action: PayloadAction<string>) => {
      state.focusedInput = action.payload;
    },
  },
});

export const {
  setSearch,
  setIsSearchbarVisible,
  setIsLoadingOverlayVisible,
  setFocusedInput,
} = viewSlice.actions;

export default viewSlice.reducer;
