var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innderHeight,0.1,1000)
camera.position.z = 25;

var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.setClearColor("#DDDDDD");
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.document);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;

    camera.updateProjectMatrix();
})

var light = new THREE.PointLight(0xFFFFFF, 1.4, 1000)
light.position.set(0,15,15);
scene.add(light);

var ourObj;
var ourObj2;

var mtlLoader = new THREE.MTLLoader();
mtlLoader.load('test.mtl', function(materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('test.obj', function (object) {
        scene.add(object);

        object.position.z -= 70;
        object.rotation.x = 250;
    });

var render =  function() {
    requestAnimationFrame(render);

    ourObj.rotation.z -= .01;
    ourObj2.rotation.z += .01;

    renderer.render(scene, camera);
}


render();

});
