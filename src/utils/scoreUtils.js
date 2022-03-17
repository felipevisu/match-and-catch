import Cookies from "js-cookie";

export function setNewScore(score) {
  const bestScore = Cookies.get("score");
  if (bestScore === undefined || parseInt(bestScore) < parseInt(score)) {
    Cookies.set("score", score, { expires: 7 });
  }
}

export function getBestScore() {
  const bestScore = Cookies.get("score");
  if (bestScore) return parseInt(bestScore);
  return 0;
}
