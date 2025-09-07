/* ==============================
   Home Page Wave Animation Script
   - Draws & animates two sine waves in SVG
   - Handles pause/play + random color change
   ============================== */

// ==============================
// 1️⃣ Setup Elements & Defaults
// ==============================
const wave1 = document.getElementById('wave1');
const wave2 = document.getElementById('wave2');

// Default colors for waves
wave1.setAttribute('fill', '#B289EF');
wave2.setAttribute('fill', 'rgba(150, 97, 255, 0.8)');

let angle = 0;        // Wave phase (used to animate motion)
let isPaused = false; // Pause flag

// Predefined color palette for random waves
const colors = ['#B289EF', '#dc75ff', '#9d9ade', '#6cd7ee', '#aceeae'];

// ==============================
// 2️⃣ Wave Path Generator
// ==============================
function generateWave(amplitude, frequency, offsetY, width) {
  let path = `M 0 ${offsetY} `;
  const points = 50; // number of points to calculate wave smoothness

  // Build wave points
  for (let i = 0; i <= points; i++) {
    const x = (i / points) * width;
    const y = offsetY + Math.sin((i / points) * frequency + angle) * amplitude;
    path += `L ${x} ${y} `;
  }

  // Close the path (down to bottom of SVG)
  path += `L ${width} 300 L 0 300 Z`;
  return path;
}

// ==============================
// 3️⃣ Animation Loop
// ==============================
function animate() {
  if (!isPaused) {
    angle += 0.02; // controls wave speed
    const width = window.innerWidth;

    // Update wave paths
    wave1.setAttribute('d', generateWave(60, 4, 100, width));
    wave2.setAttribute('d', generateWave(40, 3, 120, width));
  }

  // Keep animation running
  requestAnimationFrame(animate);
}

// Start animation
animate();

// ==============================
// 4️⃣ Button Controls
// ==============================
document.getElementById('pauseBtn').addEventListener('click', () => {
  isPaused = true;
});

document.getElementById('playBtn').addEventListener('click', () => {
  isPaused = false;
});

document.getElementById('colorBtn').addEventListener('click', () => {
  // Pick two different random colors
  let color1 = colors[Math.floor(Math.random() * colors.length)];
  let color2;
  do {
    color2 = colors[Math.floor(Math.random() * colors.length)];
  } while (color2 === color1);

  // Apply to waves
  wave1.setAttribute('fill', color1);
  wave2.setAttribute('fill', color2);
});
