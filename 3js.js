// Scene setup
const pictureandcontrols = document.getElementById("pictureandcontrols");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  55,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
pictureandcontrols.appendChild(renderer.domElement);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

let model;
const gltfLoader = new THREE.GLTFLoader();

const furnitureImages = document.querySelectorAll(".furniture-collection img");
furnitureImages.forEach((img) => {
  img.addEventListener("click", function () {
    const modelPath = img.getAttribute("data-model");
    if (model) scene.remove(model);
    gltfLoader.load(
      modelPath,
      function (gltf) {
        model = gltf.scene;
        model.scale.set(1, 1, 1);
        model.position.set(0, 1, -5);
        scene.add(model);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
  });
});
camera.position.z = 2;

// IMAGE upload and default image
const imageUpload = document.getElementById("image-upload");
const setBackgroundImage = (src) => {
  const pictureandcontrols = document.getElementById("pictureandcontrols");
  const existingBg = document.getElementById("background-image");
  if (existingBg) existingBg.remove();
  const img = new Image();
  img.src = src;
  img.id = "background-image";
  pictureandcontrols.appendChild(img);
};
imageUpload.addEventListener("change", function (event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    setBackgroundImage(e.target.result);
  };
  reader.readAsDataURL(file);
});
const defaultBackgroundButton = document.getElementById("bgbtn");
defaultBackgroundButton.addEventListener("click", function () {
  const defaultImageUrl = "/Ar-furniture/images/EMPTYROOM.jpeg";
  setBackgroundImage(defaultImageUrl);
});

// REPOSITION and Slider functionality
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };

window.addEventListener("mousedown", (event) => {
  isDragging = true;
  previousMousePosition = { x: event.clientX, y: event.clientY };
});
window.addEventListener("mouseup", () => {
  isDragging = false;
});
window.addEventListener("mousemove", (event) => {
  if (isDragging && model) {
    const deltaX = event.clientX - previousMousePosition.x;
    const deltaY = event.clientY - previousMousePosition.y;
    model.position.x += deltaX * 0.01;
    model.position.y -= deltaY * 0.01;
    previousMousePosition = { x: event.clientX, y: event.clientY };
  }
});

const zoomSlider = document.getElementById("zoom-slider");
zoomSlider.addEventListener("input", function () {
  camera.position.z = zoomSlider.value;
});

const xRotationSlider = document.getElementById("x-rotation-slider");
xRotationSlider.addEventListener("input", function () {
  if (model) model.rotation.x = THREE.Math.degToRad(xRotationSlider.value);
});

const yRotationSlider = document.getElementById("y-rotation-slider");
yRotationSlider.addEventListener("input", function () {
  if (model) model.rotation.y = THREE.Math.degToRad(yRotationSlider.value);
});

const animate = function () {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};
animate();
