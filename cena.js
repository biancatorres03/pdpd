
function iniciarCena(corHex) {
  const canvas = document.getElementById("canvas3d");

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);

  camera.position.z = 3;

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 5, 5);
  scene.add(light);

  const geo = new THREE.BoxGeometry(1, 1, 1);
  const mat = new THREE.MeshStandardMaterial({ color: corHex });
  const cubo = new THREE.Mesh(geo, mat);
  scene.add(cubo);

  function animate() {
    requestAnimationFrame(animate);
    cubo.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();
}
