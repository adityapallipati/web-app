/*
      var scene = new THREE.Scene();
      var scene2 = new THREE.Scene();
      var scene3 = new THREE.Scene();

      var camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, .1, 1000 );
      camera.position.set(0,0,600);
      camera.lookAt(scene.position);
      scene.add(camera);

      container = document.getElementById( 'sphere-two' );
      document.body.appendChild(container);

      var renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true   } );
      renderer.setSize( window.innerWidth, window.innerHeight );
      container.appendChild( renderer.domElement );

      // sphere one 

      var icosahedronGeometryTwo = new THREE.IcosahedronGeometry(30, 4);
      var lambertMaterialTwo = new THREE.MeshLambertMaterial({
          color: 0xFFFFFF,
          wireframe: true
      });
   
      var material = new THREE.MeshBasicMaterial( {wireframe: true});
      var sphere = new THREE.Mesh(icosahedronGeometryTwo, lambertMaterialTwo);
      scene.add( sphere );

      // sphere two
      var icosahedronGeometryThree = new THREE.IcosahedronGeometry(30, 2);
      var sphereGeometry = new THREE.SphereGeometry(30, 40, 32);
      var lambertMaterialThree = new THREE.MeshLambertMaterial({
          color: 0xFFF000,
          wireframe: false,
          
          
      });
      var materialTwo = new THREE.MeshBasicMaterial({wireframe: false});
      var sphereTwo = new THREE.Mesh(sphereGeometry, lambertMaterialThree);
      var materialFive = new THREE.ShaderMaterial({
        uniforms: {
          color1: {
            value: new THREE.Color("yellow")
          },
          color2: {
            value: new THREE.Color("red")
          }
        }
      })
      scene2.add( sphereTwo );


      // sphere three
      var icosahedronGeometryThree = new THREE.IcosahedronGeometry(8, 2);
      var sphereGeometry = new THREE.SphereGeometry(30, 40, 32);
      var lambertMaterialThree = new THREE.MeshLambertMaterial({
          color: 0x000FF,
          wireframe: false,
          opacity: .5
          
      });
      var materialThree = new THREE.MeshBasicMaterial({wireframe: false});
      var sphereThree = new THREE.Mesh(sphereGeometry, lambertMaterialThree);
      scene2.add( sphereThree );

       // sphere four
       var icosahedronGeometryThree = new THREE.IcosahedronGeometry(8, 2);
      var sphereGeometry = new THREE.SphereGeometry(30, 40, 32);
      var lambertMaterialThree = new THREE.MeshLambertMaterial({
          color: 0xFFFFFF,
          wireframe: false,
          opacity: .005
          
      });
      var materialThree = new THREE.MeshBasicMaterial({wireframe: false});
      var sphereFour = new THREE.Mesh(sphereGeometry, lambertMaterialThree);
      scene2.add( sphereFour );


     
      var ambientLightTwo = new THREE.AmbientLight(0xaaaaaa);
      scene.add(ambientLightTwo);

      var ambientLightThree = new THREE.AmbientLight(0xaaaaaa);
      scene2.add(ambientLightThree);

      var ambientLightFour = new THREE.AmbientLight(0xaaaaaa);
      scene3.add(ambientLightFour);

      var spotLightTwo = new THREE.SpotLight(0xffffff);
      spotLightTwo.intensity = .5;
      spotLightTwo.position.set(-300, 200, 200);
      spotLightTwo.lookAt(sphereTwo);
      spotLightTwo.castShadow = true;
      scene.add(spotLightTwo);

      var spotLightThree = new THREE.SpotLight(0xffffff);
      spotLightThree.intensity = 0.55;
      spotLightThree.position.set(900, 2000, 500);
      spotLightThree.lookAt(sphereTwo);
      spotLightThree.castShadow = true;
      scene2.add(spotLightThree);

  
      sphere.position.y = 90;
      sphereTwo.position.y =25;
      sphereThree.position.y =-37;
      sphereFour.position.y =-100;


      function render() {
        requestAnimationFrame( render );
        sphere.rotation.x += 0.001;
        sphere.rotation.y += 0.001;

        sphereTwo.rotation.z += .001;
        sphereTwo.rotation.y += .01;
        ambientLightTwo.rotation.x += .01;
        ambientLightTwo.rotation.y += .01;
        spotLightTwo.rotation.x += .01;
        spotLightTwo.rotation.y += .01;

        sphereThree.rotation.x += 0.001;
        sphereThree.rotation.y += 0.001;

      
  
        renderer.render( scene, camera );

        renderer.autoClear = true;

        renderer.render(scene2, camera);

        renderer.autoClear = false;

        renderer.render(scene3, camera);

        renderer.autoClear = true;


      }
      render();
      
*/