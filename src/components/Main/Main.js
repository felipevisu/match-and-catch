import React from "react";
import { useSelector } from "react-redux";

import { SCREENS } from "../../store/slices/mainSlice";

import Game from "../Game";
import Start from "../Start";
import Final from "../Final";

export const Main = () => {
  const { screen } = useSelector((state) => state.main);

  if (screen === SCREENS.startScreen) {
    return <Start />;
  }

  if (screen === SCREENS.gameScreen) {
    return <Game />;
  }

  if (screen === SCREENS.finalScreen) {
    return <Final />;
  }

  return <div />;
};

export default Main;
