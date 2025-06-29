import { styles } from "./pimp-my-style.data.js";

let count = 0;
let step = 1;

export const pimp = () => {
  let btn = document.querySelector("button");

  if (count == 0 && step == 1) {
    btn.classList.add("pimp");
  }

  if (step == 1) {
    btn.classList.add(styles[count]);
  } else {
    btn.classList.remove(styles[count]);
  }

  count += step;

  if (count == styles.length) {
    btn.classList.add("unpimp");
    step = -1;
    count = styles.length - 1;
  }

  if (count == -1) {
    btn.classList.remove("unpimp");
    btn.classList.remove("pimp");
    step = 1;
    count = 0;
  }
};
