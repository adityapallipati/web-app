  // Three.js ray.intersects with offset canvas

  //resive obj so that it scales to view depending on windowsize
  

  var container, camera, scene, renderer, mesh,

 
  
  CANVAS_WIDTH = 400,
  CANVAS_HEIGHT = 4000;
  
  
  
  container = document.getElementById( 'sphere-one' );
  document.body.appendChild( container );
  
  
  renderer = new THREE.WebGLRenderer( { alpha: true });
  renderer.setSize( CANVAS_WIDTH, CANVAS_HEIGHT );
  container.appendChild( renderer.domElement );
  
  scene = new THREE.Scene();
  
  camera = new THREE.PerspectiveCamera( 10, CANVAS_WIDTH / CANVAS_HEIGHT, 1, 1000 );
  camera.position.y = 0;
  
  camera.position.z = 1000;
  camera.lookAt( scene.position );


  
  function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

    render();

}
  
       // sphere one 
  
       var icosahedronGeometryTwo = new THREE.IcosahedronGeometry(7, 4);
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
        spotLightTwo.position.set(90, 400, 300);
        spotLightTwo.lookAt(sphere);
        spotLightTwo.castShadow = true;
        scene.add(spotLightTwo);

        sphere.position.y = 79;
        sphere.position.x = 0;
        
        


        function render() {

            sphere.rotation.x += 0.001;
            sphere.rotation.y += 0.001;

            renderer.autoClear = false;



            renderer.render( scene, camera );
            
            }
            
            (function animate() {
            
            requestAnimationFrame( animate );
            
            render();
            
            })();
  