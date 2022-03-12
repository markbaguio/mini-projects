const HIT = document.getElementById("div_pop");
const TARGET = document.getElementsByClassName("pop");

const HIT2 = document.getElementById("div_pop2");
const TARGET2 = document.getElementsByClassName("pop2");
// const TARGET2 = document.getElementsByClassName("pop2");
const HIT_SCORE = document.getElementById("score");

let scoreConstant = 10;
let newScore = 0;

/*WALA PA TONG MIN VALUE KASI DI NAMAN REQUIRED*/
function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function getScore() {
  return (newScore += scoreConstant);
}
/*->DAPAT TAMAAN YUNG TARGET PARA MABAGO YUNG POSITION(X,Y)
  ->ANONYMOUS FUNCTION GINAMIT KO KASI TINRY KO YUNG ARROW FUNCTION*/
//EVENTS

HIT.addEventListener("click", () => {
  for (let i = 0; i < TARGET.length; i++) {
    let newVerticalPosition = (TARGET[i].style.top = getRandomNumber() + "%");
    let newHorizontalPosition = (TARGET[i].style.left =
      getRandomNumber() + "%");
    console.log(
      "TARGET 1" + "x: ",
      newVerticalPosition,
      "y: ",
      newHorizontalPosition
    );
  }

  HIT_SCORE.innerText = getScore();
  //newScore = HIT_SCORE.innerText;
});

HIT2.addEventListener("click", () => {
  for (let i = 0; i < TARGET2.length; i++) {
    let newVerticalPosition = (TARGET2[i].style.top = getRandomNumber() + "%");
    let newHorizontalPosition = (TARGET2[i].style.left =
      getRandomNumber() + "%");
    console.log(
      "TARGET 2" + "x: ",
      newVerticalPosition,
      "y: ",
      newHorizontalPosition
    );
  }
  HIT_SCORE.innerText = getScore();
});

document.addEventListener("keydown", () => {
  alert("GINAGAWA MO? HAHHAHAHA ITAMA MO!\n" + "SCORE: " + newScore);
});
