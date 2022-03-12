const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const email = document.getElementById("email");
const submit_button = document.getElementById("submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  //get inputs
  let usernameInput = username.value.trim();
  let passwordInput = password.value.trim();
  let password2Input = password2.value.trim();
  let emailInput = email.value.trim();

  //USERNAME
  if (usernameInput === "") {
    //show error message
    setError(username, "Username is required.");
  } else {
    //success
    setSuccess(username);
  }

  //EMAIL

  if (emailInput === "") {
    setError(email, "Email is required.");
  } else {
    //success
    setSuccess(email);
  }

  //PASSWORD
  if (passwordInput === "") {
    //show error message
    setError(password, "Password field is empty.");
  } else if (passwordInput.length < 8 || passwordInput.length >= 20) {
    setError(
      password,
      "Password must be greater than 8 char and must not exceed 20 char."
    );
  } else if (password.value === passwordInput.toUpperCase()) {
    setError(password, "Capslock is enabled.");
  } else if (
    passwordInput.includes("password") ||
    passwordInput.includes("PASSWORD")
  ) {
    setError(password, "Password must not include 'password'");
  } else {
    //success
    setSuccess(password);
  }

  //PASSWORD2
  if (password2Input === "") {
    setError(password2Input, "Password field is empty.");
  } else if (password2Input != passwordInput) {
    setError(password2, "Password does not match.");
  } else if (password2.value === password2Input.toUpperCase()) {
    setError(password2, "Capslock is enabled.");
  } else {
    //success
    setSuccess(password2);
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //add error message for the small tag
  small.innerText = message;

  //adding error class
  formControl.className = "form_control error";
}

function setSuccess(input) {
  const formControl = input.parentElement;

  formControl.className = "form_control success";
}
