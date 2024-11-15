import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ViewState {
  mainWidth: number;
  mainHeight: number;
  mainContentWidth: number;
  subheaderHeight: number;
  headerHeight: number;
  footerHeight: number;
  listButtonHeight: number;
  navbarAsideWidth: number;
  containerWidth: number;
  isLoadingOverlayVisible: boolean;
  isSearchbarVisible: boolean;
  responsiveBreakpoint: string;
}

const initialState: ViewState = {
  mainWidth: 0,
  mainHeight: 0,
  mainContentWidth: 800,
  subheaderHeight: 50,
  headerHeight: 60,
  footerHeight: 60,
  listButtonHeight: 60,
  navbarAsideWidth: 300,
  containerWidth: 1200,
  isLoadingOverlayVisible: false,
  isSearchbarVisible: false,
  responsiveBreakpoint: "md",
};

export const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    setMainWidth: (state, action: PayloadAction<number>) => {
      state.mainWidth = action.payload;
    },
    setMainHeight: (state, action: PayloadAction<number>) => {
      state.mainHeight = action.payload;
    },
    setIsSearchbarVisible: (state, action: PayloadAction<boolean>) => {
      state.isSearchbarVisible = action.payload;
    },
    setIsLoadingOverlayVisible: (state, action: PayloadAction<boolean>) => {
      state.isLoadingOverlayVisible = action.payload;
    },
  },
});

export const {
  setMainWidth,
  setMainHeight,
  setIsSearchbarVisible,
  setIsLoadingOverlayVisible,
} = viewSlice.actions;

export default viewSlice.reducer;
