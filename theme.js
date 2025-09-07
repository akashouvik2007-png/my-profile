/* ==============================
   Theme Toggle Script
   Handles dark/light mode switching
   and persists preference in localStorage
   ============================== */

// Grab references
const slider = document.getElementById('themeSlider');
const body = document.body;

// ==============================
// 1️⃣ Load saved theme on page load
// ==============================
const savedTheme = localStorage.getItem('theme');

// If user previously chose "light", apply it
if (savedTheme === 'light') {
  body.classList.add('light-theme');
  if (slider) slider.checked = true; // update toggle position
} else {
  body.classList.remove('light-theme'); // default = dark
  if (slider) slider.checked = false;
}

// ==============================
// 2️⃣ Handle toggle changes
// ==============================
if (slider) {
  slider.addEventListener('change', () => {
    // Toggle class on <body>
    body.classList.toggle('light-theme');

    // Save preference in localStorage
    if (body.classList.contains('light-theme')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  });
}
