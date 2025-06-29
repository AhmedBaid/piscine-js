import { colors } from "./fifty-shades-of-cold.data.js";

export const generateClasses = () => {
  const head = document.querySelector("head");
  const style = document.createElement("style");

  let styles = "";
  colors.forEach((color) => {
    styles += `.${color} {\n  background: ${color};\n}\n`;
  });

  style.textContent = styles;
  head.appendChild(style);
};
export const generateColdShades = () => {
  const body = document.querySelector("body");

  const colorbarida = [
    "aqua",
    "blue",
    "turquoise",
    "green",
    "cyan",
    "navy",
    "purple",
  ];

  colors.forEach((color) => {
    if (colorbarida.some((cold) => color.toLowerCase().includes(cold))) {
      const div = document.createElement("div");
      div.className = color;
      div.textContent = color;
      body.appendChild(div);
    }
  });
};

export const choseShade = (arg) => {
  let alldiv = document.querySelectorAll("div");
  alldiv.forEach((div) => {
    div.className = arg;
  });
};
