import React, { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

import { addItem, changeInGame } from "../../../store/slices/gameSlice";

import Item from "../Item";
import GameOver from "./GameOver";

export const Stack = () => {
  const distach = useDispatch();
  const stackDiv = useRef(null);
  const { stack, inGame } = useSelector((state) => state.game);

  useEffect(() => {
    const interval = setInterval(() => {
      if (inGame) {
        distach(addItem());
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [inGame]);

  useEffect(() => {
    setTimeout(() => {
      const button = document.querySelector(".content .item");
      if (button.offsetTop < stackDiv.current.offsetTop) {
        distach(changeInGame());
      }
    }, 300);
  }, [stack]);

  return (
    <div ref={stackDiv} className={`stack ${!inGame && "lose"}`}>
      <GameOver />
      <div className="content">
        <AnimatePresence>
          {stack.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Stack;
