  // Three.js ray.intersects with offset canvas

  //resive obj so that it scales to view depending on windowsize
  
  /*

  var container, camera, scene, renderer, mesh;



  container = document.getElementById('c');
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild( container );


  scene = new THREE.Scene();
  


  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);


  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 0;
  camera.lookAt(scene.position);



  // sphere one 
  
       var icosahedronGeometryTwo = new THREE.IcosahedronGeometry(20, 4);
        var lambertMaterialTwo = new THREE.MeshLambertMaterial({
            color: 0xFFFFFF,
            wireframe: true
        });
     
        var material = new THREE.MeshBasicMaterial( {wireframe: true});
        var sphere = new THREE.Mesh(icosahedronGeometryTwo, lambertMaterialTwo);
        scene.add( sphere );
  
  
        var ambientLightTwo = new THREE.AmbientLight(0xaaaaaa);
        ambientLightTwo.lookAt(sphere);
        ambientLightTwo.position.set(0, 0, 300);
        scene.add(ambientLightTwo);
        
  

        var spotLightTwo = new THREE.SpotLight(0xffffff);
        spotLightTwo.intensity = .9;
        spotLightTwo.position.set(100, 100, 400);
        spotLightTwo.lookAt(sphere);
        spotLightTwo.castShadow = true;
        scene.add(spotLightTwo);

        sphere.position.z = 100;

      //sphere two 

      const textureLoader = new THREE.TextureLoader();
      const golfNormal = textureLoader.load("goldball.jpeg");

      var icosahedronGeometryThree = new THREE.IcosahedronGeometry(25, 3);
      var lambertMaterialThree = new THREE.MeshPhysicalMaterial({
            color: 0xFFFF00,
            wireframe: false,
            normalMap: golfNormal,
            roughness: 0.30,
            transmission: 0,
            thickness: 3
            
        });
     
      
        var material_two = new THREE.MeshBasicMaterial( {wireframe: false});
        var sphere_two = new THREE.Mesh(
          icosahedronGeometryThree, 
          lambertMaterialThree);
        
          hemiLight = new THREE.HemisphereLight(0xaaaaaa, 0xffffff, .9);
         
          scene.add(hemiLight);

          light = new THREE.SpotLight(0xffffff,.9);
          light.position.x = 0;
          light.position.y = 1;
          light.position.z = 0;
          light.castShadow = true;
          scene.add( light );
          scene.add( sphere_two ); 
    
          
     

        

        function render() {

            sphere.rotation.x += 0.001;
            sphere.rotation.y += 0.001;

            renderer.autoClear = true;

            sphere_two.rotation.x += 0.01;
            sphere_two.rotation.y += 0.01;

            renderer.autoClear = false;

            renderer.render( scene, camera);
            renderer.render(scene_two, camera_two);
            renderer.render(scene_three, camera_three);
            
            }
            window.addEventListener( 'resize', onWindowResize, false );

            function onWindowResize(){
            
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
            
                renderer.setSize( window.innerWidth, window.innerHeight );
            
            }

            
            (function animate() {
            
            requestAnimationFrame( animate );

        
            
            render();
            
        })(); */
  

            
//here comes the webgl

var container, camera, scene, renderer, mesh, group;

scene = new THREE.Scene();
group = new THREE.Group();
camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.set(0,0,100);
camera.lookAt(scene.position);
scene.add(camera);



renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);




// ball 1
var icosahedronGeometry = new THREE.IcosahedronGeometry(18, 4);
var lambertMaterial = new THREE.MeshLambertMaterial({
    color: 0xFFFFFF,
    wireframe: true
});

var ball = new THREE.Mesh(icosahedronGeometry, lambertMaterial);
ball.position.set(0, 19, 0);
group.add(ball);

// ball 2

const textureLoader = new THREE.TextureLoader();
const golfNormal = textureLoader.load("textures/goldball.jpeg");


var icosahedronGeometryTwo = new THREE.IcosahedronGeometry(18, 2);
var lambertMaterialTwo = new THREE.MeshPhysicalMaterial({
  color: 0xFFFF00,
  wireframe: false,
  normalMap: golfNormal,
  roughness: 0.30
  
});

var ball2 = new THREE.Mesh(icosahedronGeometryTwo, lambertMaterialTwo);
ball2.position.set(0, -20, 0);
group.add(ball2);




var ambientLight = new THREE.AmbientLight(0xaaaaaa);
scene.add(ambientLight);

var spotLight = new THREE.SpotLight(0xffffff);
spotLight.intensity = 0.9;
spotLight.position.set(-10, 40, 20);
spotLight.lookAt(ball);
spotLight.castShadow = true;
scene.add(spotLight);


var spotLight = new THREE.SpotLight(0xffffff);
spotLight.intensity = 0.9;
spotLight.position.set(-10, -100, 90);
spotLight.lookAt(ball);
spotLight.castShadow = true;
scene.add(spotLight);

scene.add(group);

document.getElementById('c').appendChild(renderer.domElement);

window.addEventListener('resize', onWindowResize, false);

render();

function onResize() {
  console.log('You resized the browser window!');
}

window.addEventListener('resize', onResize);


function render() {

  group.rotation.y += 0.005;
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}


function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}