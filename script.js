const submitBtn = document.getElementById("submit-btn");
const username = document.getElementById("username");
const password = document.getElementById("password");

const passwordInput = document.getElementById("password");
const eyeIcon = document.getElementById("eye-icon");

eyeIcon.addEventListener("click", function() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "Images/eye-regular.svg";
  } else {
    passwordInput.type = "password";
    eyeIcon.src = "Images/eye-slash-regular.svg";
  }
});


