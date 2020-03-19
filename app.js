const canvas = document.getElementById("jsCanvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 700;

let painting = false;

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (painting) {
    context.lineTo(x, y);
    context.stroke();
    context.moveTo(x, y);
  } else {
    context.beginPath(x, y);
    context.moveTo(x, y);
  }
}

function startPainting() {
  painting = true;
}

function stopPainting() {
  painting = false;
}

canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);
