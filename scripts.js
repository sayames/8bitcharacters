const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Character properties
let characterX = 50;
let characterY = 50;
const characterSize = 32;
const characterSpeed = 3;

// Main game loop
function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

// Update character position based on user input
function update() {
  if (keys['ArrowRight']) {
    characterX += characterSpeed;
  }
  if (keys['ArrowLeft']) {
    characterX -= characterSpeed;
  }
  if (keys['ArrowDown']) {
    characterY += characterSpeed;
  }
  if (keys['ArrowUp']) {
    characterY -= characterSpeed;
  }
}

// Draw the game elements on the canvas
function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the character
  ctx.fillStyle = 'blue';
  ctx.fillRect(characterX, characterY, characterSize, characterSize);
}

// Handle user input
const keys = {};
document.addEventListener('keydown', (event) => {
  keys[event.key] = true;
});
document.addEventListener('keyup', (event) => {
  keys[event.key] = false;
});

// Start the game loop
gameLoop();
