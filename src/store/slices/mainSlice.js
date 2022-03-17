import { createSlice } from "@reduxjs/toolkit";

export const SCREENS = {
  startScreen: "start-screen",
  gameScreen: "game-screen",
  finalScreen: "final-screen",
};

const initialState = {
  screen: SCREENS.startScreen,
};

const main = createSlice({
  name: "main",
  initialState,
  reducers: {
    setStartScreen: (state) => {
      state.screen = SCREENS.startScreen;
    },
    setGameScreen: (state) => {
      state.screen = SCREENS.gameScreen;
    },
    setFinalScreen: (state) => {
      state.screen = SCREENS.finalScreen;
    },
  },
});

export const { setStartScreen, setGameScreen, setFinalScreen } = main.actions;

export default main.reducer;
