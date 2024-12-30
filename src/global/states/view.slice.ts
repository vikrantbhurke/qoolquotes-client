import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ViewState {
  search: string;
  isLoadingOverlayVisible: boolean;
  isSearchbarVisible: boolean;
  focusedInput: string;
  isMobile: boolean;
  isAdHeaderVisible: boolean;
  isPaginationVisible: boolean;
}

const initialState: ViewState = {
  search: "",
  isLoadingOverlayVisible: false,
  isSearchbarVisible: false,
  focusedInput: "",
  isMobile: false,
  isAdHeaderVisible: false,
  isPaginationVisible: false,
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
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
    setIsAdHeaderVisible: (state, action: PayloadAction<boolean>) => {
      state.isAdHeaderVisible = action.payload;
    },
    setIsPaginationVisible: (state, action: PayloadAction<boolean>) => {
      state.isPaginationVisible = action.payload;
    },
  },
});

export const {
  setSearch,
  setIsSearchbarVisible,
  setIsLoadingOverlayVisible,
  setFocusedInput,
  setIsMobile,
  setIsAdHeaderVisible,
  setIsPaginationVisible,
} = viewSlice.actions;

export default viewSlice.reducer;
