import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBestScore } from "../../utils/scoreUtils";

import { setGameScreen, setStartScreen } from "../../store/slices/mainSlice";

export const Final = () => {
  const { lastPoints } = useSelector((state) => state.game);
  const bestScore = getBestScore();

  const dispatch = useDispatch();

  const handlePlayAgain = () => {
    dispatch(setGameScreen());
  };

  const handleGoBack = () => {
    dispatch(setStartScreen());
  };

  return (
    <div className="final-screen">
      <div className="content">
        <h2>Your score</h2>
        <div className="final-score">
          <h1>{lastPoints}</h1>
        </div>
        <div className="record">
          <span>
            <svg
              width="14"
              height="11"
              viewBox="0 0 14 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 11H0V0L4.1087 5.13333L7 0L9.8913 5.13333L14 0V11Z" />
            </svg>
          </span>
          <span>Record</span>
          <span>{bestScore}</span>
        </div>
        <div className="buttons">
          <button className="primary" onClick={() => handlePlayAgain()}>
            Play again
          </button>
          <button className="secondary" onClick={() => handleGoBack()}>
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Final;
