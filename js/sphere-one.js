  // Three.js ray.intersects with offset canvas

  //resive obj so that it scales to view depending on windowsize
  

  var container, camera, scene, renderer, mesh, scene_two, camera_two, scene_three, camera_three;



  container = document.getElementById('c');
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true});
  w = container.offsetWidth;
  h = container.offsetHeight;
  renderer.setSize(w, h, false);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.body.appendChild( renderer.domElement );

  scene = new THREE.Scene();
  
  scene_two = new THREE.Scene();

  scene_three = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45, w / h, 1, 1000);

  camera_two = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000);
  
  camera_three = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000);

  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 150;
  camera.lookAt(scene.position);



  camera_two.position.set(0, 0, 150);
  camera_two.lookAt(scene_two.position);

  camera_three.position.set(0,0,150);
  camera_three.lookAt(scene_three.position);



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

        sphere.position.x = -43;
        sphere.position.y = 110;
        sphere.position.z = -190;


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
    
          sphere_two.position.x = -50;
          sphere_two.position.y = -60;
          sphere_two.position.z = -250;



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

            
            (function animate() {
            
            requestAnimationFrame( animate );

        
            
            render();
            
        })();
  

            