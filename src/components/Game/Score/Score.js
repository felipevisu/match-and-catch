import React from "react";

import { useSelector } from "react-redux";
import { getBestScore } from "../../../utils/scoreUtils";

export const Score = () => {
  const bestScore = getBestScore();
  const { points, inGame } = useSelector((state) => state.game);

  return (
    <div className={`score ${!inGame && "lose"}`}>
      <div className="best">
        <svg
          width="14"
          height="11"
          viewBox="0 0 14 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 11H0V0L4.1087 5.13333L7 0L9.8913 5.13333L14 0V11Z" />
        </svg>
        <span>{bestScore}</span>
      </div>
      <div className="current">{points}</div>
    </div>
  );
};

export default Score;
