import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Color, Font } from "../enums";

export interface ViewState {
  search: string;
  width: number;
  isLoadingOverlayVisible: boolean;
  isSearchbarVisible: boolean;
  focusedInput: string;
  isMobile: boolean;
  isAdHeaderVisible: boolean;
  isPaginationVisible: boolean;
  font: Font;
  color: Color;
}

const initialState: ViewState = {
  search: "",
  width: 0,
  isLoadingOverlayVisible: false,
  isSearchbarVisible: false,
  focusedInput: "",
  isMobile: false,
  isAdHeaderVisible: false,
  isPaginationVisible: false,
  font: Font.Inter,
  color: Color.Default,
};

export const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload;
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
    setFont: (state, action: PayloadAction<Font>) => {
      state.font = action.payload;
    },
    setColor: (state, action: PayloadAction<Color>) => {
      state.color = action.payload;
    },
  },
});

export const {
  setSearch,
  setWidth,
  setIsSearchbarVisible,
  setIsLoadingOverlayVisible,
  setFocusedInput,
  setIsMobile,
  setIsAdHeaderVisible,
  setIsPaginationVisible,
  setFont,
  setColor,
} = viewSlice.actions;

export default viewSlice.reducer;
