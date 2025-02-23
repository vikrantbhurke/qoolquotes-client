import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Color, Font } from "../enums";

const loadFont = () => {
  try {
    const serializedFont = localStorage.getItem("font");
    return serializedFont ? JSON.parse(serializedFont) : undefined;
  } catch (err) {
    console.error("Could not load font", err);
    return undefined;
  }
};

const saveFont = (font: Font) => {
  try {
    const serializedFont = JSON.stringify(font);
    localStorage.setItem("font", serializedFont);
  } catch (err) {
    console.error("Could not save font", err);
  }
};

const loadColor = () => {
  try {
    const serializedColor = localStorage.getItem("color");
    return serializedColor ? JSON.parse(serializedColor) : undefined;
  } catch (err) {
    console.error("Could not load color", err);
    return undefined;
  }
};

const saveColor = (color: Color) => {
  try {
    const serializedColor = JSON.stringify(color);
    localStorage.setItem("color", serializedColor);
  } catch (err) {
    console.error("Could not save color", err);
  }
};

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
  font: loadFont() || Font.Inter,
  color: loadColor() || Color.Default,
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
      saveFont(action.payload);
    },
    resetFont: (state) => {
      state.font = Font.Inter;
      saveFont(Font.Inter);
    },
    setColor: (state, action: PayloadAction<Color>) => {
      state.color = action.payload;
      saveColor(action.payload);
    },
    resetColor: (state) => {
      state.color = Color.Default;
      saveColor(Color.Default);
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
  resetFont,
  setColor,
  resetColor,
} = viewSlice.actions;

export default viewSlice.reducer;
