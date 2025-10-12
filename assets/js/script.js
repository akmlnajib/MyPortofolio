// === Efek Bintang Jatuh ===
const canvas = document.getElementById('space-bg');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

let meteors = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createMeteor() {
  return {
    x: random(0, canvas.width),
    y: 0,
    size: random(2, 4),
    speed: random(5, 10),
    length: random(50, 120),
    opacity: random(0.4, 1)
  };
}

function drawMeteor(meteor) {
  const gradient = ctx.createLinearGradient(meteor.x, meteor.y, meteor.x + meteor.length, meteor.y + meteor.length);
  gradient.addColorStop(0, `rgba(0,224,255,${meteor.opacity})`);
  gradient.addColorStop(1, "rgba(0,0,0,0)");

  ctx.beginPath();
  ctx.moveTo(meteor.x, meteor.y);
  ctx.lineTo(meteor.x + meteor.length, meteor.y + meteor.length);
  ctx.strokeStyle = gradient;
  ctx.lineWidth = meteor.size;
  ctx.stroke();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (Math.random() < 0.05) meteors.push(createMeteor());
  meteors.forEach((meteor, i) => {
    meteor.x += meteor.speed;
    meteor.y += meteor.speed;
    drawMeteor(meteor);
    if (meteor.x > canvas.width || meteor.y > canvas.height) meteors.splice(i, 1);
  });
  requestAnimationFrame(animate);
}

animate();

// === Efek Teks Mengetik Neon ===
const text = "Halo, Saya Akmal Najib";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
window.onload = typeWriter;
