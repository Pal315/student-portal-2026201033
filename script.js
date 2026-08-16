// Student Portal — shared front-end logic

// --- Login page ---
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("loginError");

    if (username === "Pal Shah" && password === "Palshah123") {
      window.location.href = "dashboard.html";
    } else {
      error.style.display = "block";
    }
  });
}

// --- Profile page ---
const saveProfileBtn = document.getElementById("saveProfile");
if (saveProfileBtn) {
  saveProfileBtn.addEventListener("click", function () {
    alert("All set! Your changes have been saved.");
  });
}

// --- Settings page ---
const saveSettingsBtn = document.getElementById("saveSettings");
if (saveSettingsBtn) {
  saveSettingsBtn.addEventListener("click", function () {
    alert("Settings saved.");
  });
}
