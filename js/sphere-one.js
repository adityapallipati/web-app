  // Three.js ray.intersects with offset canvas

  //resive obj so that it scales to view depending on windowsize
  

  var container, camera, scene, renderer, mesh, 

 
  
  CANVAS_WIDTH = 500,
  CANVAS_HEIGHT = 500;
  
  
  
  container = document.getElementById( 'sphere-one' );
  document.body.appendChild( container );
  
  
  renderer = new THREE.WebGLRenderer( { alpha: true });
  renderer.setSize( CANVAS_WIDTH, CANVAS_HEIGHT );
  container.appendChild( renderer.domElement );
  
  scene = new THREE.Scene();
  
  
  camera = new THREE.PerspectiveCamera( 5, CANVAS_WIDTH / CANVAS_HEIGHT, 1, 1000 );

  
  
  camera.position.set(0, 20, 100);
  camera.lookAt( scene.position );





  
  

       // sphere one 
  
       var icosahedronGeometryTwo = new THREE.IcosahedronGeometry(4, 4);
        var lambertMaterialTwo = new THREE.MeshLambertMaterial({
            color: 0xFFFFFF,
            wireframe: true
        });
     
        var material = new THREE.MeshBasicMaterial( {wireframe: true});
        var sphere = new THREE.Mesh(icosahedronGeometryTwo, lambertMaterialTwo);
        scene.add( sphere );
  
  
        var ambientLightTwo = new THREE.AmbientLight(0xaaaaaa);
        scene.add(ambientLightTwo);
  
        var spotLightTwo = new THREE.SpotLight(0xffffff);
        spotLightTwo.intensity = .7;
        spotLightTwo.position.set(100, 100, 100);
        spotLightTwo.lookAt(sphere);
        spotLightTwo.castShadow = true;
        scene.add(spotLightTwo);

  
        sphere.position.x = .15;
        
        


        function render() {

            sphere.rotation.x += 0.001;
            sphere.rotation.y += 0.001;

            renderer.autoClear = true;

     

            renderer.render( scene, camera );
            
            }
            
            (function animate() {
            
            requestAnimationFrame( animate );

            
            
            render();
            
            })();
  