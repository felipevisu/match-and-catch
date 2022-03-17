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
        if (state.corrects >= 2) {
          const oldAnswer = state.answers.shift();
          const newAnswer = state.answers[0];
          state.answers = [...state.answers, oldAnswer];
          state.answer = newAnswer;
        }
      }
    },
    addItem: (state) => {
      if (state.items.length > 0) {
        const correctItems = [
          ...state.stack.filter((item) =>
            item.answers.some((answer) => answer === state.answer)
          ),
        ];
        if (correctItems.length === 0) {
          const newItem = state.items.find((item) =>
            item.answers.some((answer) => answer === state.answer)
          );
          state.items = [
            ...state.items.filter((item) => item.id !== newItem.id),
          ];
          state.stack = [newItem, ...state.stack];
        } else {
          const item = state.items.shift();
          state.stack = [item, ...state.stack];
        }
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
