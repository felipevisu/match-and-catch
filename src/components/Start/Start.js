import React from "react";
import { useDispatch } from "react-redux";

import { setGameScreen } from "../../store/slices/mainSlice";

export const Start = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setGameScreen());
  };

  return (
    <div className="start-screen">
      <div className="content">
        <h1 className="title">Con-junga-tion</h1>
        <p>Lorem ispums that explain what this experiences do</p>

        <div className="box">
          <h3 className="box-title">Practice</h3>
          <p>Review the latest verbs & tenses you learned</p>
          <button onClick={() => handleClick()}>Let’s practice!</button>
        </div>

        <div className="box">
          <h3 className="box-title">Challenge</h3>
          <p>Review the latest verbs & tenses you learned</p>
          <button onClick={() => handleClick()}>Play!</button>
        </div>
      </div>
    </div>
  );
};

export default Start;
