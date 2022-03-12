let bgColors = ["#364966", "#fa4454", "#042e29", "#b78460", "#b38c8f"];

const FLIP_BUTTON = document.getElementById("btn");
const COLOR = document.getElementById("bgC");

FLIP_BUTTON.addEventListener("click", function () {
  let randomNumber = getRandonNumber();
  document.body.style.backgroundColor = bgColors[randomNumber];
  COLOR.innerText = bgColors[randomNumber];
});

function getRandonNumber() {
  return Math.floor(Math.random() * bgColors.length);
}
