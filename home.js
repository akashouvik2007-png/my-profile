const wave1 = document.getElementById('wave1');
const wave2 = document.getElementById('wave2');

// Default colors
wave1.setAttribute('fill', '#B289EF');
wave2.setAttribute('fill', 'rgba(150, 97, 255, 0.8)');

let angle = 0;
let isPaused = false;

const colors = ['#B289EF', '#dc75ff', '#9d9ade', '#6cd7ee', '#aceeae'];

function generateWave(amplitude, frequency, offsetY, width) {
  let path = `M 0 ${offsetY} `;
  const points = 50;
  for (let i = 0; i <= points; i++) {
    const x = (i / points) * width;
    const y = offsetY + Math.sin((i / points) * frequency + angle) * amplitude;
    path += `L ${x} ${y} `;
  }
  path += `L ${width} 300 L 0 300 Z`;
  return path;
}

function animate() {
  if (!isPaused) {
    angle += 0.02;
    const width = window.innerWidth;
    wave1.setAttribute('d', generateWave(60, 4, 100, width));
    wave2.setAttribute('d', generateWave(40, 3, 120, width));
  }
  requestAnimationFrame(animate);
}

animate();

// Button functionality
document.getElementById('pauseBtn').addEventListener('click', () => { isPaused = true; });
document.getElementById('playBtn').addEventListener('click', () => { isPaused = false; });
document.getElementById('colorBtn').addEventListener('click', () => {
  let color1 = colors[Math.floor(Math.random() * colors.length)];
  let color2;
  do { color2 = colors[Math.floor(Math.random() * colors.length)]; } while(color2 === color1);
  wave1.setAttribute('fill', color1);
  wave2.setAttribute('fill', color2);
});
