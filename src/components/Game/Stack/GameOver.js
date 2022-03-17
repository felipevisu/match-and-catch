import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export const GameOver = () => {
  const { inGame } = useSelector((state) => state.game);

  const animations = {
    layout: true,
    initial: { opacity: 0, scale: 0, zIndex: -1 },
    animate: !inGame && "in",
    whileTap: "tapped",
    variants: {
      in: { scale: 1, opacity: 1, y: 0, zIndex: 50 },
    },
  };

  return (
    <motion.h2 className="game-over" {...animations}>
      Game
      <br />
      Over
    </motion.h2>
  );
};

export default GameOver;
