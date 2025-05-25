"use strict";
// Get the elements
const openBtn = document.getElementById("openBtn");
const popup = document.getElementById("popupForm");
const closeBtn = document.getElementById("closeBtn");

// Open the popup
openBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

// Close the popup
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Close the popup if clicked outside of it
window.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});

// Form submission (you can replace this with actual form processing logic)
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  alert(`Username: ${username}\nPassword: ${password}`);
});

document.getElementById("closeTopBar").addEventListener("click", function()
{document.getElementById("topBar").classList.add ("hide");
});