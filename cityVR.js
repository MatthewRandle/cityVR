var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 ); // Perspective projection parameters
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 1;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // Size of the 2D projection
document.body.appendChild(renderer.domElement); // Connecting to the canvas

var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
controls.position0.clientY = 1;

// shadow
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMapping;

//building geometry

var geometrysmallbuilding = new THREE.BoxGeometry( 3, 3.5, 3 );
var geometrymediumbuilding = new THREE.BoxGeometry( 8, 6, 3 );
var geometrylargebuilding = new THREE.BoxGeometry( 1, 7, 15 );
var geometrytallbuilding = new THREE.BoxGeometry( 3, 15, 3 );
var geometryfloor = new THREE.PlaneGeometry( 30, 30, 30 );
var geometryroad = new THREE.PlaneGeometry( 12, 3.225, 2 );
var geometrypavement = new THREE.BoxGeometry( 12, .5, 2 );
var geometrypavement2 = new THREE.BoxGeometry( 15, .5, 2 );

// car geometry
var geometrycar = new THREE.BoxGeometry( 1, 1, 2 );

//building textures

var textureb1 = new THREE.TextureLoader().load( 'https://i.imgur.com/mzNKmbI.jpg3' );
textureb1.wrapS = THREE.RepeatWrapping;
textureb1.wrapT = THREE.RepeatWrapping;
textureb1.repeat.set( 1, 1 );

var textureb2 = new THREE.TextureLoader().load( 'https://i.imgur.com/Vyc51yj.jpg' );
textureb2.wrapS = THREE.RepeatWrapping;
textureb2.wrapT = THREE.RepeatWrapping;
textureb2.repeat.set( 1, 1 );

//tesxtureb3 to add
//textureb4 to add

var textureb4 = new THREE.TextureLoader().load( 'https://i.imgur.com/b4gTFPE.jpg' );
textureb4.wrapS = THREE.RepeatWrapping;
textureb4.wrapT = THREE.RepeatWrapping;
textureb4.repeat.set( 1, 1 );

var textureb5 = new THREE.TextureLoader().load( 'https://i.imgur.com/nmgvZ2y.jpg' );
textureb5.wrapS = THREE.RepeatWrapping;
textureb5.wrapT = THREE.RepeatWrapping;
textureb5.repeat.set( 1.5, 1 );

var textureb6 = new THREE.TextureLoader().load( 'https://i.imgur.com/ai27Mai.jpg' );
textureb6.wrapS = THREE.RepeatWrapping;
textureb6.wrapT = THREE.RepeatWrapping;
textureb6.repeat.set( 1.5, 1 );

var textureb7 = new THREE.TextureLoader().load( 'https://i.imgur.com/ZB0WK6M.jpg' );
textureb7.wrapS = THREE.RepeatWrapping;
textureb7.wrapT = THREE.RepeatWrapping;
textureb7.repeat.set( 1, 8 );

var texturebfloor = new THREE.TextureLoader().load( 'https://i.imgur.com/lyBXGGd.jpg' );
texturebfloor.wrapS = THREE.RepeatWrapping;
texturebfloor.wrapT = THREE.RepeatWrapping;
texturebfloor.repeat.set( 50, 50 );

var texturepavement = new THREE.TextureLoader().load( 'https://i.imgur.com/WDl05sW.jpg' );
texturepavement.wrapS = THREE.RepeatWrapping;
texturepavement.wrapT = THREE.RepeatWrapping;
texturepavement.repeat.set( 6, 2.05 );

var textureroad = new THREE.TextureLoader().load( 'https://i.imgur.com/FkdVt4F.jpg' );
textureroad.wrapS = THREE.RepeatWrapping;
textureroad.wrapT = THREE.RepeatWrapping;
textureroad.repeat.set( 1, 1 );

//building matirial 

var materialsmallbuilding = new THREE.MeshPhongMaterial( { 
  map: textureb1,
  bumpMap: new THREE.TextureLoader().load('https://i.imgur.com/IEvcznT.jpg')
} );

var materialsmallbuilding2 = new THREE.MeshPhongMaterial( { 
  map: textureb4,
  bumpMap: new THREE.TextureLoader().load('https://i.imgur.com/zq1xrOV.jpg')
} );

var materialmediumbuilding2 = new THREE.MeshPhongMaterial( {color: 0xff0000} );

var materialmediumbuilding = new THREE.MeshPhongMaterial( { 
  map: textureb2,
  bumpMap: new THREE.TextureLoader().load('https://i.imgur.com/io4ThYx.jpg'),
  shininess: 40
} );

var materiallargebuilding = new THREE.MeshPhongMaterial( { map: textureb5 } );

var materiallargebuilding2 = new THREE.MeshPhongMaterial( { map: textureb6 } );

var materialtallbuilding = new THREE.MeshPhongMaterial( { map: textureb7 } );

var materialfloor = new THREE.MeshPhongMaterial( { map: texturebfloor } );

var materialroad = new THREE.MeshPhongMaterial( { 
  map: textureroad,
  bumpMap: new THREE.TextureLoader().load('https://i.imgur.com/oaj63mP.jpg'),
  shininess: 100
} );

var materialpavement = new THREE.MeshPhongMaterial( { 
  map: texturepavement,
  shininess: 100
} );

var materialcar = new THREE.MeshPhongMaterial( {color: Math.random() * 0xffffff} );

//building objects and positions

var b1 = new THREE.Mesh( geometrysmallbuilding, materialsmallbuilding ); 
b1.position.z = -4.2; 
b1.position.x = 4.8;
b1.position.y = 1.2;
b1.castShadow = true;
scene.add( b1 );

var b2 = new THREE.Mesh( geometrymediumbuilding, materialmediumbuilding );
b2.position.z = -4; 
b2.position.x = -.6;
b2.position.y = 2.45;
b2.castShadow = true;
b2.receiveShadow = true;
scene.add( b2 );

var b3 = new THREE.Mesh( geometrymediumbuilding, materialmediumbuilding2 );
b3.position.z = 4; 
b3.position.x = 2.5;
b3.position.y = 2.45;
b3.castShadow = true;
scene.add( b3 );

var b4 = new THREE.Mesh( geometrysmallbuilding, materialsmallbuilding2 );
b4.position.z = 4.2; 
b4.position.x = -3;
b4.position.y = 1.2;
b4.castShadow = true;
scene.add( b4 );

var b5 = new THREE.Mesh( geometrylargebuilding, materiallargebuilding );
b5.position.x = 12;
b5.position.y = 2.95;
b5.receiveShadow = true;
b5.castShadow = true;
scene.add( b5 );

var b6 = new THREE.Mesh( geometrylargebuilding, materiallargebuilding2 );
b6.position.x = -10;
b6.position.y = 2.95;
b6.receiveShadow = true;
b6.castShadow = true;
scene.add( b6 );

var b7 = new THREE.Mesh( geometrytallbuilding, materialtallbuilding );
b7.position.x = -12; 
b7.position.z = -5; 
b7.position.y = 8.45;
b7.receiveShadow = true;
b7.castShadow = true;
scene.add( b7 );

var floor = new THREE.Mesh( geometryfloor, materialfloor );
floor.rotateX(-Math.PI * 0.5);
floor.position.y = -.55;
floor.receiveShadow = true;
scene.add( floor );

var road = new THREE.Mesh( geometryroad, materialroad );
road.rotateX(-Math.PI * 0.5);
road.position.y = -.549;
road.position.x = 1;
road.receiveShadow = true;
road.bumpScale = 0.1; 
scene.add( road );

var pavement = new THREE.Mesh( geometrypavement, materialpavement );
pavement.receiveShadow = true;
pavement.position.x = 1;
pavement.position.z = -2.6;
pavement.position.y = -.74;
pavement.castShadow = true;
scene.add( pavement );

var pavement2 = new THREE.Mesh( geometrypavement, materialpavement );
pavement2.receiveShadow = true;
pavement2.position.x = 1;
pavement2.position.z = 2.6;
pavement2.position.y = -.74;
pavement2.castShadow = true;
scene.add( pavement2 );

var pavement3 = new THREE.Mesh( geometrypavement2, materialpavement );
pavement3.receiveShadow = true;
pavement3.position.x = 11.5;
pavement3.position.z = 0;
pavement3.position.y = -.74;
pavement3.castShadow = true;
pavement3.rotateY(-Math.PI * 0.5);
scene.add( pavement3 );

var pavement4 = new THREE.Mesh( geometrypavement2, materialpavement );
pavement4.receiveShadow = true;
pavement4.position.x = -9.5;
pavement4.position.z = 0;
pavement4.position.y = -.74;
pavement4.castShadow = true;
pavement4.rotateY(-Math.PI * 0.5);
scene.add( pavement4 );

var carStartPosition = -10;
var carTargetPosition = 10;

var car = new THREE.Mesh( geometrycar, materialcar );
car.position.x = 10;
car.position.z = carStartPosition;
car.castShadow = true;
scene.add( car );


// Add the ambient light
var lightAmbient = new THREE.AmbientLight( 0x2e334e ); 
scene.add(lightAmbient);
// Add the spot light
var lightThis = new THREE.SpotLight(0x232b8e);
lightThis.position.x = 0;
lightThis.position.y = 15;
lightThis.position.z = 0;
lightThis.intensity = 1.0;
lightThis.penumbra = 0.50;
lightThis.angle = Math.PI/6;
scene.add(lightThis);
//lightThis.target.position.x = 0;
//lightThis.target.position.y = -50;
//lightThis.target.position.z = -100;
//scene.add(lightThis.target);

// street lights
var streetLight1 = new THREE.SpotLight(0x9ca6c1);
streetLight1.position.set( 6.7, 2.2, -4.2 );
streetLight1.target.position.set(8,0,-4.2);
streetLight1.intensity = 3;
streetLight1.distance = 20;
streetLight1.penumbra = 1;
streetLight1.angle = Math.PI/3;
streetLight1.castShadow = true; 
scene.add( streetLight1.target, streetLight1 );
streetLight1.shadowMapWidth = 1024; // default is 512
streetLight1.shadowMapHeight = 1024; // default is 512

var streetLight2 = new THREE.SpotLight(0x9ca6c1);
streetLight2.position.set( 6.7, 2.2, 3.2 )
streetLight2.target.position.set(8,0,3.2);
streetLight2.intensity = 3;
streetLight2.distance = 20;
streetLight2.penumbra = 1;
streetLight2.angle = Math.PI/3;
streetLight2.castShadow = true; 
scene.add( streetLight2.target, streetLight2 );
streetLight2.shadowMapWidth = 1024; // default is 512
streetLight2.shadowMapHeight = 1024; // default is 512

var streetLight3 = new THREE.SpotLight(0xeb9035);
streetLight3.position.set( -3, 2, -2 );
streetLight3.target.position.set(-3,0,-2);
streetLight3.intensity = 2;
streetLight3.distance = 10;
streetLight3.penumbra = 0.8;
streetLight3.angle = Math.PI/3;
streetLight3.castShadow = true; 
scene.add( streetLight3.target, streetLight3 );
streetLight3.shadowMapWidth = 1024; // default is 512
streetLight3.shadowMapHeight = 1024; // default is 512

var streetLight4 = new THREE.SpotLight(0xeb9035);
streetLight4.position.set( 5, 2, -2 );
streetLight4.target.position.set(5,0,-2);
streetLight4.intensity = 2;
streetLight4.distance = 10;
streetLight4.penumbra = 0.8;
streetLight4.angle = Math.PI/3;
streetLight4.castShadow = true; 
scene.add( streetLight4.target, streetLight4 );
streetLight4.shadowMapWidth = 1024; // default is 512
streetLight4.shadowMapHeight = 1024; // default is 512

var iFrame = 0;

function getRandomSpeed(min, max) {
  return Math.random() * (max - min) + min;
}

var speed = 0.1; // default car speed

function animatecar(){
  if (car.position.z <= carTargetPosition) {
        car.position.z += speed; 
        if (car.position.z >= carTargetPosition) {
          scene.remove( car );
          car.position.z = carStartPosition;
          car.material.color.setHex(Math.random() * 0xffffff); // random colour
          speed = getRandomSpeed(0.15,0.03); // random car speed
          scene.add( car );
        }
    }
}

function animate() 
{
    requestAnimationFrame(animate);
    iFrame ++;
    controls.update();
    animatecar();
    renderer.render(scene, camera);
}
animate();
