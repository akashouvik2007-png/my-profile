// theme.js

const slider = document.getElementById('themeSlider');
const body = document.body;

// 1️⃣ Load saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light-theme');
  if (slider) slider.checked = true;
} else {
  body.classList.remove('light-theme');
  if (slider) slider.checked = false;
}

// 2️⃣ Toggle theme and save preference
if (slider) {
  slider.addEventListener('change', () => {
    body.classList.toggle('light-theme');
    if (body.classList.contains('light-theme')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  });
}