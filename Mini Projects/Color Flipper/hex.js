let hexColor = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const BTN = document.getElementById("btn");
const COLOR = document.getElementById("bgC");

function getRandomColor() {
  return Math.floor(Math.random() * hexColor.length);
}

function randomColorCallBack() {
  let newBgColor = "#";
  for (let i = 0; i < 6; i++) {
    newBgColor += hexColor[getRandomColor()];
  }
  document.body.style.backgroundColor = newBgColor;
  COLOR.innerText = newBgColor;
  console.log(randomColor);
}

// EVENTS
BTN.addEventListener("click", randomColorCallBack);
