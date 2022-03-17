import React, { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

import { addItem, changeInGame } from "../../../store/slices/gameSlice";

import Item from "../Item";

export const Stack = () => {
  const distach = useDispatch();
  const stackDiv = useRef(null);
  const { stack, inGame } = useSelector((state) => state.game);

  useEffect(() => {
    const interval = setInterval(() => {
      if (inGame) {
        distach(addItem());
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [inGame]);

  useEffect(() => {
    const button = document.querySelector(".content .item");
    if (button.offsetTop < stackDiv.current.offsetTop) {
      distach(changeInGame());
    }
  }, [stack]);

  return (
    <div ref={stackDiv} className={`stack ${!inGame && "lose"}`}>
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
