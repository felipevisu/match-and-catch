import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion, usePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import {
  removeItem,
  winPoints,
  losePoints,
} from "../../../store/slices/gameSlice";

function matchPronoun(pronouns, pronoun) {
  const match = pronouns.find((item) => item === pronoun);
  if (match) return true;
  return false;
}

export const Item = ({ item }) => {
  const [match, setMatch] = useState("");
  const dispatch = useDispatch();
  const { inGame, answer } = useSelector((state) => state.game);
  const [isPresent, safeToRemove] = usePresence();

  const handleClick = () => {
    if (inGame) {
      if (matchPronoun(item.answers, answer)) {
        setMatch("correct");
        dispatch(winPoints());
        setTimeout(() => dispatch(removeItem(item.id)), 500);
      } else {
        dispatch(losePoints());
        setMatch("wrong");
        setTimeout(() => setMatch(""), 1000);
      }
    }
  };

  const animations = {
    layout: true,
    initial: { opacity: 0, y: -200 },
    style: {
      position: isPresent ? "static" : "absolute",
    },
    animate: isPresent ? "in" : "out",
    whileTap: "tapped",
    variants: {
      in: { scaleY: 1, opacity: 1, y: 0 },
      out: { scaleY: 0, opacity: 0, zIndex: -1 },
      tapped: { scale: 0.98, opacity: 0.5, transition: { duration: 0.1 } },
    },
    onAnimationComplete: () => !isPresent && safeToRemove(),
    transition: { type: "spring", stiffness: 500, damping: 50, mass: 1 },
  };

  return (
    <motion.button
      className={`item ${match}`}
      {...animations}
      onClick={handleClick}
    >
      {item.content}
    </motion.button>
  );
};

Item.propTypes = {
  item: PropTypes.any,
};

export default Item;
