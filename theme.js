// Get the toggle slider
const slider = document.getElementById('themeSlider');

// Apply saved theme on page load
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-theme');
  if (slider) slider.checked = true;
}

// Listen for toggle changes
if (slider) {
  slider.addEventListener('change', () => {
    document.body.classList.toggle('light-theme');
    const theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
  });
}