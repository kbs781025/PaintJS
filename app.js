const canvas = document.getElementById("jsCanvas");
const context = canvas.getContext("2d");

let currentColor = "black";

canvas.width = 500;
canvas.height = 700;

let painting = false;

function initColorButtons() {
  const colorButtons = document
    .getElementById("jsColors")
    .getElementsByTagName("div");

  for (let i = 1; i < colorButtons.length; ++i) {
    colorButtons[i].addEventListener("click", function() {
      currentColor = this.style.backgroundColor;
    });
  }
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (painting) {
    context.lineTo(x, y);
    context.stroke();
  } else {
    context.beginPath(x, y);
    context.moveTo(x, y);
  }
}

function startPainting() {
  context.strokeStyle = currentColor;
  painting = true;
}

function stopPainting() {
  painting = false;
}

canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);
initColorButtons();
