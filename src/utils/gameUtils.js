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
  const data = {
    stack: items.slice(0, 5),
    items: items.slice(5),
    answers: current.answers,
    answer: current.answers[0],
  };
  return data;
}
