"use strict";
const moonIcon = document.getElementById("moon");
const page = document.getElementById("htmlPage");
const sunIcon = document.getElementById("sun");
const menuBtn = document.getElementById("menu");
const closeBtn = document.getElementById("closeMenu");
const mobileNavbar = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
  mobileNavbar.classList.toggle("hidden");
});

closeBtn.addEventListener("click", () => {
  mobileNavbar.classList.toggle("hidden");
});

mobileNavbar.addEventListener("click", () => {
  mobileNavbar.classList.add("hidden");
});

moonIcon.addEventListener("click", () => {
  // localStorage.setItem("theme", "dark");
  toggleTheme();
  console.log("moon");
});

sunIcon.addEventListener("click", () => {
  toggleTheme();
  // localStorage.setItem("theme", "light");
});

function toggleTheme() {
  page.classList.toggle("dark");
  sunIcon.classList.toggle("hidden");
  moonIcon.classList.toggle("hidden");
}

// check the local storage theme
const currentTheme = localStorage.getItem("theme");
console.log(currentTheme);
