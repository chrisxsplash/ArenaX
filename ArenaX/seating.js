document.addEventListener('DOMContentLoaded', function() {
  // 2D Seating Chart
  const canvas = document.getElementById('seating-chart-2d');
  const ctx = canvas.getContext('2d');

  // Draw ellipse for seating
  ctx.beginPath();
  ctx.ellipse(canvas.width / 2, canvas.height / 2, canvas.width / 2 - 20, canvas.height / 2 - 20, 0, 0, 2 * Math.PI);
  ctx.strokeStyle = '#ccc';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw seats
  const seats = [
    { x: canvas.width / 2 - 50, y: canvas.height / 2 - 50 },
    { x: canvas.width / 2 + 50, y: canvas.height / 2 - 50 },
    { x: canvas.width / 2 - 50, y: canvas.height / 2 + 50 },
    { x: canvas.width / 2 + 50, y: canvas.height / 2 + 50 }
  ];

  seats.forEach(seat => {
    ctx.beginPath();
    ctx.arc(seat.x, seat.y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.stroke();
  });

  // 3D Seating Chart
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('seating-chart-3d').appendChild(renderer.domElement);

  // Create arena floor
  const floorGeometry = new THREE.CircleGeometry(50, 64);
  const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x555555 });
  const floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.rotation.x = -Math.PI / 2;
  scene.add(floor);

  // Create seats
  const seatGeometry = new THREE.BoxGeometry(2, 2, 2);
  const seatMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const seats3D = [];

  for (let i = 0; i < 10; i++) {
    const angle = (i / 10) * Math.PI * 2;
    const x = Math.cos(angle) * 40;
    const z = Math.sin(angle) * 40;
    const seat = new THREE.Mesh(seatGeometry, seatMaterial);
    seat.position.set(x, 1, z);
    seats3D.push(seat);
    scene.add(seat);
  }

  camera.position.set(0, 50, 100);
  camera.lookAt(0, 0, 0);

  function animate() {
    requestAnimationFrame(animate);
    seats3D.forEach(seat => {
      seat.rotation.y += 0.01;
    });
    renderer.render(scene, camera);
  }

  animate();
});