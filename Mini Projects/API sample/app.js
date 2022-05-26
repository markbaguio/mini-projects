const dogImage = document.querySelector(".image1-container");
const catImage = document.querySelector(".image2-container");

const dog = document.querySelector("#dog");
const dogButton = document.getElementById("dog-button");
const catButton = document.getElementById("cat-button");

dogButton.addEventListener("click", getRandomDog);
catButton.addEventListener("click", getRandomCat);

function getRandomDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      dogImage.innerHTML = `<img src=${data.message}>`;
    });
}

function getRandomCat() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      catImage.innerHTML = `<img src = ${data[0].url}>`;
    });
}
