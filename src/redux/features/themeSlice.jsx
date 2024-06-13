import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeThemeHandler: (state, action) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { changeThemeHandler } = themeSlice.actions;

export default themeSlice.reducer;
