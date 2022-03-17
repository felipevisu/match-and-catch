import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { setNewScore } from "../../utils/scoreUtils";

import Header from "./Header";
import Stack from "./Stack";

export const Game = () => {
  const { inGame, points } = useSelector((state) => state.game);

  useEffect(() => {
    setNewScore(points);
  }, [inGame]);

  return (
    <div className="game">
      <Header />
      <Stack />
    </div>
  );
};

export default Game;
