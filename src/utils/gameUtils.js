import pronouns from "../assets/data/pronouns";
import tenses from "../assets/data/tenses";

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

export function initializeItems() {
  let current;
  // eslint-disable-next-line
  const params = new URLSearchParams(window.location.search);
  const mode = params.get("mode");

  if (mode) {
    switch (mode) {
      case "tenses":
        current = tenses;
        break;
      case "pronouns":
        current = pronouns;
        break;
      default:
        current = pronouns;
    }
  } else {
    current = pronouns;
  }

  const items = shuffle(current.items);
  const stack = items.slice(0, 3);

  let possibleAnswers = [];
  stack.forEach((item) => {
    possibleAnswers = [...possibleAnswers, ...item.answers];
  });
  const answer = shuffle(possibleAnswers)[0];
  const answers = [...current.answers.filter((ans) => ans !== answer), answer];

  const data = {
    stack: stack,
    items: items.slice(3),
    answers: answers,
    answer: answer,
  };
  return data;
}
