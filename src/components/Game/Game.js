import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { resetGame } from "../../store/slices/gameSlice";
import { setFinalScreen } from "../../store/slices/mainSlice";
import { setNewScore } from "../../utils/scoreUtils";

import Header from "./Header";
import Stack from "./Stack";

export const Game = () => {
  const dispatch = useDispatch();
  const { inGame, points } = useSelector((state) => state.game);

  useEffect(() => {
    setNewScore(points);

    if (!inGame) {
      setTimeout(() => {
        dispatch(setFinalScreen());
        dispatch(resetGame());
      }, 3000);
    }
  }, [inGame]);

  return (
    <div className="game">
      <Header />
      <Stack />
    </div>
  );
};

export default Game;
