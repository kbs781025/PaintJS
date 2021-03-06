//import { interpolateTemp } from "./gammaVal";
blackbody_color = [
  { Kelvin: 1000, Color: { Red: 1.0, Green: 0.547, Blue: 0.2132 } },
  { Kelvin: 1100, Color: { Red: 1.0, Green: 0.5582, Blue: 0.2258 } },
  { Kelvin: 1200, Color: { Red: 1.0, Green: 0.5693, Blue: 0.2385 } },
  { Kelvin: 1300, Color: { Red: 1.0, Green: 0.5802, Blue: 0.2515 } },
  { Kelvin: 1400, Color: { Red: 1.0, Green: 0.591, Blue: 0.2646 } },
  { Kelvin: 1500, Color: { Red: 1.0, Green: 0.6017, Blue: 0.2779 } },
  { Kelvin: 1600, Color: { Red: 1.0, Green: 0.6122, Blue: 0.2913 } },
  { Kelvin: 1700, Color: { Red: 1.0, Green: 0.6227, Blue: 0.3049 } },
  { Kelvin: 1800, Color: { Red: 1.0, Green: 0.633, Blue: 0.3186 } },
  { Kelvin: 1900, Color: { Red: 1.0, Green: 0.6433, Blue: 0.3325 } },
  { Kelvin: 2000, Color: { Red: 1.0, Green: 0.6534, Blue: 0.3464 } },
  { Kelvin: 2100, Color: { Red: 1.0, Green: 0.6634, Blue: 0.3605 } },
  { Kelvin: 2200, Color: { Red: 1.0, Green: 0.6732, Blue: 0.3747 } },
  { Kelvin: 2300, Color: { Red: 1.0, Green: 0.6829, Blue: 0.389 } },
  { Kelvin: 2400, Color: { Red: 1.0, Green: 0.6926, Blue: 0.4034 } },
  { Kelvin: 2500, Color: { Red: 1.0, Green: 0.7021, Blue: 0.4178 } },
  { Kelvin: 2600, Color: { Red: 1.0, Green: 0.7115, Blue: 0.4323 } },
  { Kelvin: 2700, Color: { Red: 1.0, Green: 0.7208, Blue: 0.4469 } },
  { Kelvin: 2800, Color: { Red: 1.0, Green: 0.7299, Blue: 0.4616 } },
  { Kelvin: 2900, Color: { Red: 1.0, Green: 0.739, Blue: 0.4763 } },
  { Kelvin: 3000, Color: { Red: 1.0, Green: 0.7479, Blue: 0.491 } },
  { Kelvin: 3100, Color: { Red: 1.0, Green: 0.7568, Blue: 0.5058 } },
  { Kelvin: 3200, Color: { Red: 1.0, Green: 0.7655, Blue: 0.5206 } },
  { Kelvin: 3300, Color: { Red: 1.0, Green: 0.7741, Blue: 0.5354 } },
  { Kelvin: 3400, Color: { Red: 1.0, Green: 0.7826, Blue: 0.5503 } },
  { Kelvin: 3500, Color: { Red: 1.0, Green: 0.791, Blue: 0.5652 } },
  { Kelvin: 3600, Color: { Red: 1.0, Green: 0.7993, Blue: 0.5801 } },
  { Kelvin: 3700, Color: { Red: 1.0, Green: 0.8075, Blue: 0.595 } },
  { Kelvin: 3800, Color: { Red: 1.0, Green: 0.8156, Blue: 0.6099 } },
  { Kelvin: 3900, Color: { Red: 1.0, Green: 0.8237, Blue: 0.6247 } },
  { Kelvin: 4000, Color: { Red: 1.0, Green: 0.8315, Blue: 0.6396 } },
  { Kelvin: 4100, Color: { Red: 1.0, Green: 0.8393, Blue: 0.6546 } },
  { Kelvin: 4200, Color: { Red: 1.0, Green: 0.847, Blue: 0.6694 } },
  { Kelvin: 4300, Color: { Red: 1.0, Green: 0.8546, Blue: 0.6843 } },
  { Kelvin: 4400, Color: { Red: 1.0, Green: 0.8622, Blue: 0.6991 } },
  { Kelvin: 4500, Color: { Red: 1.0, Green: 0.8696, Blue: 0.7138 } },
  { Kelvin: 4600, Color: { Red: 1.0, Green: 0.8769, Blue: 0.7286 } },
  { Kelvin: 4700, Color: { Red: 1.0, Green: 0.8841, Blue: 0.7433 } },
  { Kelvin: 4800, Color: { Red: 1.0, Green: 0.8913, Blue: 0.7581 } },
  { Kelvin: 4900, Color: { Red: 1.0, Green: 0.8984, Blue: 0.7728 } },
  { Kelvin: 5000, Color: { Red: 1.0, Green: 0.9053, Blue: 0.7874 } },
  { Kelvin: 5100, Color: { Red: 1.0, Green: 0.9122, Blue: 0.8019 } },
  { Kelvin: 5200, Color: { Red: 1.0, Green: 0.919, Blue: 0.8164 } },
  { Kelvin: 5300, Color: { Red: 1.0, Green: 0.9258, Blue: 0.8309 } },
  { Kelvin: 5400, Color: { Red: 1.0, Green: 0.9323, Blue: 0.8454 } },
  { Kelvin: 5500, Color: { Red: 1.0, Green: 0.9388, Blue: 0.8597 } },
  { Kelvin: 5600, Color: { Red: 1.0, Green: 0.9453, Blue: 0.874 } },
  { Kelvin: 5700, Color: { Red: 1.0, Green: 0.9517, Blue: 0.8882 } },
  { Kelvin: 5800, Color: { Red: 1.0, Green: 0.958, Blue: 0.9024 } },
  { Kelvin: 5900, Color: { Red: 1.0, Green: 0.9642, Blue: 0.9165 } },
  { Kelvin: 6000, Color: { Red: 1.0, Green: 0.9704, Blue: 0.9306 } },
  { Kelvin: 6100, Color: { Red: 1.0, Green: 0.9764, Blue: 0.9446 } },
  { Kelvin: 6200, Color: { Red: 1.0, Green: 0.9824, Blue: 0.9586 } },
  { Kelvin: 6300, Color: { Red: 1.0, Green: 0.9884, Blue: 0.9724 } },
  { Kelvin: 6400, Color: { Red: 1.0, Green: 0.9942, Blue: 0.9862 } },
  { Kelvin: 6500, Color: { Red: 1.0, Green: 1.0, Blue: 1.0 } },
  { Kelvin: 6600, Color: { Red: 0.9867, Green: 0.9923, Blue: 1.0 } },
  { Kelvin: 6700, Color: { Red: 0.9736, Green: 0.9847, Blue: 1.0 } },
  { Kelvin: 6800, Color: { Red: 0.961, Green: 0.9773, Blue: 1.0 } },
  { Kelvin: 6900, Color: { Red: 0.9488, Green: 0.9701, Blue: 1.0 } },
  { Kelvin: 7000, Color: { Red: 0.9369, Green: 0.963, Blue: 1.0 } },
  { Kelvin: 7100, Color: { Red: 0.9255, Green: 0.9561, Blue: 1.0 } },
  { Kelvin: 7200, Color: { Red: 0.9142, Green: 0.9493, Blue: 1.0 } },
  { Kelvin: 7300, Color: { Red: 0.9034, Green: 0.9428, Blue: 1.0 } },
  { Kelvin: 7400, Color: { Red: 0.8928, Green: 0.9365, Blue: 1.0 } },
  { Kelvin: 7500, Color: { Red: 0.8826, Green: 0.9303, Blue: 1.0 } },
  { Kelvin: 7600, Color: { Red: 0.8727, Green: 0.9242, Blue: 1.0 } },
  { Kelvin: 7700, Color: { Red: 0.8629, Green: 0.9182, Blue: 1.0 } },
  { Kelvin: 7800, Color: { Red: 0.8537, Green: 0.9125, Blue: 1.0 } },
  { Kelvin: 7900, Color: { Red: 0.8445, Green: 0.9068, Blue: 1.0 } },
  { Kelvin: 8000, Color: { Red: 0.8357, Green: 0.9013, Blue: 1.0 } },
  { Kelvin: 8100, Color: { Red: 0.8271, Green: 0.896, Blue: 1.0 } },
  { Kelvin: 8200, Color: { Red: 0.8186, Green: 0.8907, Blue: 1.0 } },
  { Kelvin: 8300, Color: { Red: 0.8105, Green: 0.8856, Blue: 1.0 } },
  { Kelvin: 8400, Color: { Red: 0.8025, Green: 0.8805, Blue: 1.0 } },
  { Kelvin: 8500, Color: { Red: 0.7947, Green: 0.8757, Blue: 1.0 } },
  { Kelvin: 8600, Color: { Red: 0.7871, Green: 0.8708, Blue: 1.0 } },
  { Kelvin: 8700, Color: { Red: 0.7798, Green: 0.8661, Blue: 1.0 } },
  { Kelvin: 8800, Color: { Red: 0.7726, Green: 0.8615, Blue: 1.0 } },
  { Kelvin: 8900, Color: { Red: 0.7656, Green: 0.857, Blue: 1.0 } },
  { Kelvin: 9000, Color: { Red: 0.7588, Green: 0.8526, Blue: 1.0 } },
  { Kelvin: 9100, Color: { Red: 0.7521, Green: 0.8483, Blue: 1.0 } },
  { Kelvin: 9200, Color: { Red: 0.7456, Green: 0.8441, Blue: 1.0 } },
  { Kelvin: 9300, Color: { Red: 0.7393, Green: 0.84, Blue: 1.0 } },
  { Kelvin: 9400, Color: { Red: 0.7331, Green: 0.8359, Blue: 1.0 } },
  { Kelvin: 9500, Color: { Red: 0.7271, Green: 0.832, Blue: 1.0 } },
  { Kelvin: 9600, Color: { Red: 0.7212, Green: 0.8281, Blue: 1.0 } },
  { Kelvin: 9700, Color: { Red: 0.7155, Green: 0.8243, Blue: 1.0 } },
  { Kelvin: 9800, Color: { Red: 0.7098, Green: 0.8206, Blue: 1.0 } },
  { Kelvin: 9900, Color: { Red: 0.7043, Green: 0.8169, Blue: 1.0 } },
  { Kelvin: 10000, Color: { Red: 0.6989, Green: 0.8133, Blue: 1.0 } }
];

const interpolateTemp = function(kelvin) {
  let closestIndex = 0;
  const kelVinFrontplace = Math.floor(kelvin / 100);
  const index = kelVinFrontplace - 10;
  if (kelvin % 100 == 0) {
    return blackbody_color[index].Color;
  }

  const downElement = blackbody_color[index];
  const upElement = blackbody_color[index + 1];

  const interpolationRate =
    (kelvin - downElement.Kelvin) / (upElement.Kelvin - downElement.Kelvin);
  //console.log(kelvin, downElement.Kelvin, upElement.Kelvin);
  //console.log(interpolationRate);

  const interpolatedRed =
    downElement.Color.Red +
    (upElement.Color.Red - downElement.Color.Red) * interpolationRate;
  const interpolatedGreen =
    downElement.Color.Green +
    (upElement.Color.Green - downElement.Color.Green) * interpolationRate;
  const interpolatedBlue =
    downElement.Color.Blue +
    (blackbody_color[index].Color.Blue - downElement.Color.Blue) *
      interpolationRate;

  return {
    Red: interpolatedRed,
    Green: interpolatedGreen,
    Blue: interpolatedBlue
  };
};

const canvas = document.getElementById("jsCanvas");
const cover = document.getElementById("jsCover");
const context = canvas.getContext("2d");
const MIN_TEMP = 1500;
const MAX_TEMP = 8500;

let currentColor = "rgba(0, 0, 0, 0)";
let currentLineWidth = "2.5";
let fillMode = false;
let colorTemp = 1.0;
let additionalImageDataPixels = new ImageData(canvas.width, canvas.height).data;

canvas.width = 500;
canvas.height = 700;

let painting = false;

function storePixels() {
  const currentImgData = context.getImageData(
    0,
    0,
    canvas.width,
    canvas.height
  );
  for (let i = 0; i < additionalImageDataPixels.length; i += 4) {
    additionalImageDataPixels[i] = currentImgData.data[i];
    additionalImageDataPixels[i + 1] = currentImgData.data[i + 1];
    additionalImageDataPixels[i + 2] = currentImgData.data[i + 2];
    additionalImageDataPixels[i + 3] = currentImgData.data[i + 3];
  }
}

function adjustColorTemp(kelvin, imageData, pixels) {
  const rgb = interpolateTemp(kelvin);

  for (let i = 0; i < pixels.length; i += 4) {
    imageData.data[i] = Math.round(rgb.Red * pixels[i]);
    imageData.data[i + 1] = Math.round(rgb.Green) * pixels[i + 1];
    imageData.data[i + 2] = Math.round(rgb.Blue * pixels[i + 2]);
  }

  context.putImageData(imageData, 0, 0);
}

function initFilter() {
  const range = document.getElementById("jsFilterRange");

  range.addEventListener("input", function(evt) {
    const temp = Math.floor(
      MIN_TEMP + ((MAX_TEMP - MIN_TEMP) * evt.target.value) / 100
    );

    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    adjustColorTemp(temp, imageData, additionalImageDataPixels);
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
  additionalImageDataPixels = context.getImageData(
    0,
    0,
    canvas.width,
    canvas.height
  ).data;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  if (painting) {
    context.lineTo(x, y);
    context.stroke();
    storePixels();
  } else {
    context.beginPath(x, y);
    context.moveTo(x, y);
  }
}

function getRgbColor(colorString) {
  // const parsedRgb = currentColor
  //   .substring(5, currentColor.length - 1)
  //   .replace(/ /g, "")
  //   .split(",");
  const parsedRgb = currentColor.replace(/[^\d,]/g, "").split(",");
  let blue = parsedRgb[2];
  blue *= bluelightFactor;

  //return `rgba(${parsedRgb[0]}, ${parsedRgb[1]}, ${blue}, ${bluelightFactor})`;
  //return `rgba(${parsedRgb[0]}, ${parsedRgb[1]}, ${parsedRgb[2]}, ${bluelightFactor})`;
  return parsedRgb;
}

function startPainting() {
  context.strokeStyle = currentColor;
  context.lineWidth = currentLineWidth;

  if (fillMode) {
    context.fillStyle = currentColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
    storePixels();
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
