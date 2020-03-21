const canvas = document.getElementById("jsCanvas");
const context = canvas.getContext("2d");

let currentColor = "rgb(0, 0, 0)";
let currentLineWidth = "2.5";
let fillMode = false;

let bluelightFactor = 1.0;

canvas.width = 500;
canvas.height = 700;

let painting = false;

function initFilter() {
  const range = document.getElementById("jsFilterRange");

  range.addEventListener("input", function(evt) {
    const value = evt.target.value;
    bluelightFactor = value / 100;
  });
}

function initSaveButton() {
  const save = document.getElementById("jsSave");
  save.addEventListener("click", function() {
    const download = canvas.toDataURL();
    const anchor = document.createElement("a");
    anchor.href = download;
    anchor.download = "Image";
    anchor.click();
  });
}

function toggleButtonColor(button) {
  if (button.style.backgroundColor === "bisque") {
    button.style.backgroundColor = "white";
  } else {
    button.style.backgroundColor = "bisque";
  }
}

function initFillButton() {
  const fillButton = document.getElementById("jsMode");
  fillButton.addEventListener("click", function() {
    fillMode = !fillMode;
    if (fillMode) {
      fillButton.innerText = "Paint";
    } else {
      fillButton.innerText = "Fill";
    }

    toggleButtonColor(fillButton);
  });
}

function initColorButtons() {
  const colorButtons = document
    .getElementById("jsColors")
    .getElementsByTagName("div");

  const buttonArray = Array.from(colorButtons);

  buttonArray.forEach(color =>
    color.addEventListener("click", function() {
      currentColor = this.style.backgroundColor;
    })
  );

  //   for (let i = 1; i < colorButtons.length; ++i) {
  //     colorButtons[i].addEventListener("click", function() {
  //       currentColor = this.style.backgroundColor;
  //     });
  //   }
}

function initRangeBar() {
  const rangeBar = document
    .getElementById("jsRange")
    .getElementsByTagName("input")[0];
  rangeBar.addEventListener("input", function() {
    currentLineWidth = this.value;
  });
}

function initCanvases() {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);

  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
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

function getCurrentColor() {
  const parsedRgb = currentColor
    .substring(4, currentColor.length - 1)
    .replace(/ /g, "")
    .split(",");
  let blue = parsedRgb[2];
  blue *= bluelightFactor;

  currentColor = `rgb(${parsedRgb[0]}, ${parsedRgb[1]}, ${blue})`;
  return currentColor;
}

function startPainting() {
  context.strokeStyle = getCurrentColor();
  context.lineWidth = currentLineWidth;
  if (fillMode) {
    context.fillStyle = getCurrentColor();
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
  painting = true;
}

function stopPainting() {
  painting = false;
}

initCanvases();
initColorButtons();
initRangeBar();
initFillButton();
initSaveButton();
initFilter();
