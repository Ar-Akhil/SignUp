console.log("connected");
const trail = document.getElementById("logoname");
const button = document.getElementById("submitbutton");
const number = document.getElementById("number");
const password1 = document.getElementById("password");
const password2 = document.getElementById("confirm-password");
console.log(number);
button.addEventListener("click", (e) => {
  if (!number.checkValidity()) {
    number.style.border = "3px solid red";
    document.getElementById("number-error").innerText =
      "Enter a valid number!!";
  } else {
    number.style.border = "3px solid white";
    document.getElementById("number-error").innerText = "";
  }
  if (password1.value !== password2.value) {
    password1.style.border = "3px solid red";
    password2.style.border = "3px solid red";
    document.getElementById("password-error").innerText =
      "Password do not match";
  } else {
    password1.style.border = "3px solid white";
    password2.style.border = "3px solid white";
    document.getElementById("password-error").innerText = "";
  }
});
