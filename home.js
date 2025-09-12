/* ==============================
   Wave Animation Script
   ============================== */

const wave1 = document.getElementById('wave1');
const wave2 = document.getElementById('wave2');
const svg   = document.getElementById('waveSVG');

if (!wave1 || !wave2 || !svg) {
  console.error("Wave elements missing in HTML");
}

let angle = 0;
let isPaused = false;

// Default colors
wave1.setAttribute('fill', '#B289EF');
wave2.setAttribute('fill', 'rgba(150, 97, 255, 0.8)');

// Color palette
const colors = ['#B289EF', '#dc75ff', '#9d9ade', '#6cd7ee', '#aceeae'];

// Generate wave path
function generateWave(amplitude, frequency, offsetY, width, height) {
  let path = `M 0 ${offsetY} `;
  const points = 60;

  for (let i = 0; i <= points; i++) {
    const x = (i / points) * width;
    const y = offsetY + Math.sin((i / points) * frequency + angle) * amplitude;
    path += `L ${x} ${y} `;
  }

  const safeHeight = height > 0 ? height : 300; // fallback if svg height = 0
  path += `L ${width} ${safeHeight} L 0 ${safeHeight} Z`;
  return path;
}

// Draw once
function drawWaves() {
  const width = svg.clientWidth || window.innerWidth;
  const height = svg.clientHeight || 300;

  wave1.setAttribute('d', generateWave(60, 4, height * 0.4, width, height));
  wave2.setAttribute('d', generateWave(40, 3, height * 0.55, width, height));
}

// Animation loop
function animate() {
  if (!isPaused) {
    angle += 0.02;
    drawWaves();
  }
  requestAnimationFrame(animate);
}
drawWaves();
animate();

// Buttons
document.getElementById('pauseBtn')?.addEventListener('click', () => {
  isPaused = true;
});
document.getElementById('playBtn')?.addEventListener('click', () => {
  isPaused = false;
});
document.getElementById('colorBtn')?.addEventListener('click', () => {
  let color1 = colors[Math.floor(Math.random() * colors.length)];
  let color2;
  do {
    color2 = colors[Math.floor(Math.random() * colors.length)];
  } while (color2 === color1);

  wave1.setAttribute('fill', color1);
  wave2.setAttribute('fill', color2);
});

// Redraw on resize/orientation change
window.addEventListener('resize', drawWaves);
