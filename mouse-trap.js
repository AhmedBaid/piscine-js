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
    if (!box) return;
    let X = e.clientX;
    let Y = e.clientY;
    current.style.top = `${Y - 25}px`;
    current.style.left = `${X - 25}px`;

    let posbox = box.getBoundingClientRect();
    let pos = current.getBoundingClientRect();
    const inside =
      posbox.left - 1 <= pos.left &&
      posbox.right + 1 >= pos.right &&
      posbox.top - 1 <= pos.top &&
      posbox.bottom + 1 >= pos.bottom;

    if (!box.contains(current)) {
      if (inside) {
        current.style.background = "var(--purple)";
        box.appendChild(current);
      }
    } else {
      let boxLeft = posbox.left;
      let boxTop = posbox.top;
      let boxRight = posbox.right - 50;
      let boxBottom = posbox.bottom - 50;
      let circleLeft = Math.max(boxLeft, Math.min(e.clientX - 25, boxRight));
      let circleTop = Math.max(boxTop, Math.min(e.clientY - 25, boxBottom));
      current.style.top = circleTop + "px";
      current.style.left = circleLeft + "px";
    }
  });
}
export function setBox() {
  let box = document.createElement("div");
  box.className = "box";
  document.body.appendChild(box);
}
