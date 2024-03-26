const password = document.getElementById("password");
const clickBtn = document.getElementById("submit-btn");
const eyeIcon = document.getElementById("eye-icon");
console.log(eyeIcon);

clickBtn.addEventListener("click", function () {
  if (password.value === "") {
    alert("Please write some password!");
  } else if (password.type == "password") {
    password.type = "text";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  } else {
    password.type = "password";
    eyeIcon.classList.add("fa-eye-slash");
    eyeIcon.classList.remove("fa-eye");
  }
});
