import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCorrects } from "../../../store/slices/gameSlice";
import Score from "../Score/Score";

export const Header = () => {
  const [width, setWidth] = useState(0);
  const [win, setWin] = useState(false);
  const dispatch = useDispatch();
  const { inGame, answer, corrects } = useSelector((state) => state.game);

  useEffect(() => {
    if (corrects === 0) {
      setTimeout(() => {
        setWidth(50 * corrects);
        setWin(false);
      }, 1000);
    } else {
      setWidth(50 * corrects);
    }
    if (corrects >= 2) {
      setWin(true);
      dispatch(resetCorrects());
    }
  }, [corrects]);

  return (
    <div className={`header ${!inGame && "lose"} ${win && "win"}`}>
      <Score />
      <div>
        <div className="answer">{answer}</div>
        <div className="progress">
          <div className="bar" style={{ width: width + "%" }} />
        </div>
      </div>
    </div>
  );
};

export default Header;
