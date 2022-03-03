var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x1f1e1c, 0);
document.body.appendChild(renderer.domElement);




const textureLoader = new THREE.TextureLoader();
const clearcoatNormal = textureLoader.load(
    "textures/Scratched_gold_01_1K_Normal.png"
  );

var geometry = new THREE.IcosahedronGeometry(15, 1);
var material = new THREE.MeshPhysicalMaterial({
   color: 0x00FFFF,

  }); 


  let dirLight = new THREE.DirectionalLight(0xffffff, 1);
  scene.add(dirLight);


var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

cube.position.set(-1, 20, 0);

camera.position.set(0,0,100);
camera.lookAt(scene.position);
scene.add(camera);

var ambientLight = new THREE.AmbientLight(0xaaaaaa);
scene.add(ambientLight);

var spotLight = new THREE.SpotLight(0xffffff);
spotLight.intensity = 0.9;
spotLight.position.set(-10, 40, 20);
spotLight.lookAt(cube);
spotLight.castShadow = true;
scene.add(spotLight);

window.addEventListener('resize', onWindowResize, false);

var render = function () {
    requestAnimationFrame(render);

    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

render();

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }





