  // Three.js ray.intersects with offset canvas

  //resive obj so that it scales to view depending on windowsize
  
  

  var container, camera, scene, renderer, mesh, scene_two, camera_two


 
  
  container = document.getElementById( 'sphere-one' );
  document.body.appendChild( container );
  
  
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  container.appendChild( renderer.domElement );
  
  scene = new THREE.Scene();
  
  scene_two = new THREE.Scene();

  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );

  camera_two = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000);
  

  camera.position.set(0, 0, 150);
  camera.lookAt( scene.position);

  camera_two.position.set(0, 0, 150);
  camera_two.lookAt(scene_two.position);


       // sphere one 
  
       var icosahedronGeometryTwo = new THREE.IcosahedronGeometry(25, 4);
        var lambertMaterialTwo = new THREE.MeshLambertMaterial({
            color: 0xFFFFFF,
            wireframe: true
        });
     
        var material = new THREE.MeshBasicMaterial( {wireframe: true, antialias: true});
        var sphere = new THREE.Mesh(icosahedronGeometryTwo, lambertMaterialTwo);
        scene.add( sphere );
  
  
        var ambientLightTwo = new THREE.AmbientLight(0xaaaaaa);
        ambientLightTwo.lookAt(sphere);
        ambientLightTwo.position.set(0, 0, 300);
        scene.add(ambientLightTwo);
        
  

        var spotLightTwo = new THREE.SpotLight(0xffffff);
        spotLightTwo.intensity = .9;
        spotLightTwo.position.set(0, 0, 250);
        spotLightTwo.lookAt(sphere);
        spotLightTwo.castShadow = true;
        scene.add(spotLightTwo);

  
        sphere.position.x = 0;
        sphere.position.y = 30;


      //sphere two 

      var icosahedronGeometryThree = new THREE.IcosahedronGeometry(25, 1);
        var lambertMaterialThree = new THREE.MeshLambertMaterial({
            color: 0xFFFF00,
            wireframe: false
        });
     
        var material_two = new THREE.MeshBasicMaterial( {wireframe: false, antialias: true});
        var sphere_two = new THREE.Mesh(icosahedronGeometryThree, lambertMaterialThree);
        scene_two.add( sphere_two );
  
  
        var ambientLightThree = new THREE.AmbientLight(0xaaaaaa);

        ambientLightThree.position.set(0, 0, 300);
        scene_two.add(ambientLightThree);
        
  

        var spotLightThree = new THREE.SpotLight(0xffffff);
        spotLightThree.intensity = .9;
        spotLightThree.position.set(-200, 500, 100);
        spotLightThree.lookAt(sphere_two);
        spotLightThree.castShadow = true;
        scene_two.add(spotLightThree);

  
        sphere_two.position.x = 0;
        sphere_two.position.y = -30;


        function render() {

            sphere.rotation.x += 0.001;
            sphere.rotation.y += 0.001;

            renderer.autoClear = true;

            sphere_two.rotation.x += 0.01;
            sphere_two.rotation.y += 0.01;

            renderer.autoClear = false;

     

            renderer.render( scene, camera );
            renderer.render(scene_two, camera_two);
            
            }
            
            (function animate() {
            
            requestAnimationFrame( animate );

            
            
            render();
            
            })();
  

            