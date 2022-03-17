import { createSlice } from "@reduxjs/toolkit";
import { initializeItems } from "../../utils/gameUtils";

const initialState = {
  ...initializeItems(),
  points: 0,
  mistakes: 0,
  corrects: 0,
  inGame: true,
};

const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeInGame: (state) => {
      state.inGame = !state.inGame;
    },
    winPoints: (state) => {
      state.points += 10;
    },
    losePoints: (state) => {
      state.points -= 5;
    },
    resetCorrects: (state) => {
      state.corrects = 0;
    },
    removeItem: (state, action) => {
      const item = state.stack.find((item) => item.id === action.payload);
      if (item) {
        state.stack = [
          ...state.stack.filter((item) => item.id !== action.payload),
        ];
        state.items = [...state.items, item];
        state.corrects += 1;
        if (state.corrects >= 3) {
          const oldAnswer = state.answers.shift();
          const newAnswer = state.answers[0];
          state.answers = [...state.answers, oldAnswer];
          state.answer = newAnswer;
        }
      }
    },
    addItem: (state) => {
      if (state.items.length > 0) {
        const item = state.items.shift();
        state.stack = [...state.stack, item];
      }
    },
  },
});

export const {
  removeItem,
  addItem,
  changeInGame,
  winPoints,
  losePoints,
  resetCorrects,
} = game.actions;

export default game.reducer;
