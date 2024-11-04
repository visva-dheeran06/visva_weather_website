document.getElementById("login-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    window.location.href = "index.html";
});

document.getElementById("signup-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    window.location.href = "index.html";
});
var passConfirm = function() {
    if (document.getElementById("Password").value ==
      document.getElementById("ConfirmPassword").value) {
      document.getElementById("Message").style.color = "Green";
      document.getElementById("Message").innerHTML = "Passwords match!"
    } else {
      document.getElementById("Message").style.color = "Red";
      document.getElementById("Message").innerHTML = "Passwords do NOT match!"
    }
  }
  document.getElementById("password-reset-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    window.location.href = "login.html";
});

