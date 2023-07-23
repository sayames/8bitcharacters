// Variables
let scene, camera, renderer, character;

// Initialize the scene
function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Create the room
  const roomGeometry = new THREE.BoxGeometry(10, 5, 10);
  const roomMaterial = new THREE.MeshPhongMaterial({ color: 0xdddddd });
  const room = new THREE.Mesh(roomGeometry, roomMaterial);
  scene.add(room);

  // Create the 8-bit character
  const characterGeometry = new THREE.BoxGeometry(1, 1, 1);
  const characterMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
  character = new THREE.Mesh(characterGeometry, characterMaterial);
  character.position.set(0, 0.5, 0);
  scene.add(character);

  // Create directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 10, 2);
  scene.add(directionalLight);

  camera.position.set(0, 3, 10);
  camera.lookAt(character.position);

  // Add event listener for window resize
  window.addEventListener('resize', onWindowResize, false);
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  
  // Add animations here (e.g., character walking)

  renderer.render(scene, camera);
}

// Resize the canvas when the window size changes
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

init();
animate();
