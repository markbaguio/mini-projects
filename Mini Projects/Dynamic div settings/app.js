const SET = document.getElementById("set_button");
const SELECTION = document.getElementsByName("property");
const DYNAMIC_DIV = document.getElementById("dynamic_div");

function setNewProperty() {
  for (let i = 0; i < SELECTION.length; i++) {
    let newValue = SELECTION[i].value;
    let newProperty = SELECTION[i].getAttribute("id");
    console.log(newProperty, newValue);

    DYNAMIC_DIV.style[newProperty] = newValue;
  }
}

SET.addEventListener("click", setNewProperty);
console.log(SELECTION);
