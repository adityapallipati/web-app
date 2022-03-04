var camera, scene, material, mesh, geometry, renderer;

    function drawSphere() {
        init();
        animate();
    }

    
    function init() {

        // renderer
         renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
         renderer.setSize(window.innerWidth, window.innerHeight);
         document.body.appendChild(renderer.domElement);

        // camera
        scene = new THREE.Scene()
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / innerHeight, 1, 1000);
        camera.position.z = 100;
        scene.add(camera);

        // ball 3

        geometry = new THREE.SphereGeometry(15, 25, 10);
        material = new THREE.MeshPhysicalMaterial({
          color: 0x049ef4,
          roughness: 1.0,
          metalness: 1.0,
          reflectivity: 0.5,
          clearcoat: .8


        });
      
        mesh = new THREE.Mesh(geometry, material);

        //scene
        scene.add(mesh);
        mesh.position.y = 18;
        mesh.position.x = 0;


        // ball 4

        geometry2 = new THREE.SphereGeometry(15, 40, 40);
        material2 = new THREE.MeshPhysicalMaterial({
          color: 0x707070,
          roughness: 1.0,
          metalness: 1.0,
          reflectivity: 1,
          opacity: 0.45
        });
      
        mesh2 = new THREE.Mesh(geometry2, material2);

        //scene
        scene.add(mesh2);
        mesh2.position.y = -20;
        mesh2.position.x = 0;

        hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4);
        scene.add(hemiLight);
   
        light = new THREE.SpotLight(0xffa95c,9);
        light.position.set(50,10,100);
        light.castShadow = true;
        scene.add( light );
        


        
 
    }

    
    function animate() {
        requestAnimationFrame(animate);
        render();
    }
    function render() {
        mesh.rotation.x += .01;
        mesh.rotation.y += .101;

        mesh2.rotation.x += .001;
        mesh2.rotation.y -= .001;
      
        renderer.render(scene, camera);
    }

    

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize, false);

    // fn callin
    drawSphere();

function onResize() {
  console.log('You resized the browser window!');
}

window.addEventListener('resize', onResize);