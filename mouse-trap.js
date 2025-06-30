let current = null;
export function createCircle() {
  document.addEventListener("click", (event) => {
    let circle = document.createElement("div");
    circle.className = "circle";
    circle.style.background = "white";
    circle.style.top = `${event.clientY - 25}px`;
    circle.style.left = `${event.clientX - 25}px`;
    document.body.appendChild(circle);
    current = circle;
  });
}

export function moveCircle() {
  document.addEventListener("mousemove", (e) => {
    let box = document.querySelector(".box");
    if (!box || !current) return;
    let X = e.clientX;
    let Y = e.clientY;
    current.style.top = `${Y - 25}px`;
    current.style.left = `${X - 25}px`;

    let posbox = box.getBoundingClientRect();
    const inside =
      posbox.left < e.clientX - 25 &&
      posbox.right > e.clientX + 25 &&
      posbox.top < e.clientY - 25 &&
      posbox.bottom > e.clientY + 25;
    if (inside) {
      current.style.background = "var(--purple)";
      box.appendChild(current);
    }
    if (current.style.background == "var(--purple)") {
      if (e.clientX < posbox.left + 25) {
        current.style.left = posbox.left + "px";
      }
      if (e.clientX > posbox.right - 25) {
        current.style.left = posbox.right - 50 + "px";
      }
      if (e.clientY < posbox.top + 25) {
        current.style.top = posbox.top + "px";
      }
      if (e.clientY > posbox.bottom - 25) {
        current.style.top = posbox.bottom - 50 + "px";
      }
    }
  });
}
export function setBox() {
  let box = document.createElement("div");
  box.className = "box";
  document.body.appendChild(box);
}
