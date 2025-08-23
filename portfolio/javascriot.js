// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const btn = document.getElementById("themeToggle");
  btn.textContent = document.body.classList.contains("dark") ? "☀" : "🌙";
});

// Contact form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent! Thanks for reaching out.");
  this.reset();
});

// Filter projects
const buttons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");
