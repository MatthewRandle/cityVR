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

// Add the ambient light
var lightAmbient = new THREE.AmbientLight( 0x2e334e, 0.5 ); 
scene.add(lightAmbient);

/* TEMP */
// Add the spot light
/* var lightThis = new THREE.SpotLight(0x232b8e);
lightThis.position.x = 0;
lightThis.position.y = 15;
lightThis.position.z = 0;
lightThis.intensity = 1.0;
lightThis.penumbra = 0.50;
lightThis.angle = Math.PI/6;
scene.add(lightThis); */

var iFrame = 0;

function getRandomSpeed(min, max) {
  return Math.random() * (max - min) + min;
}

var speed = 0.05; // default car speed

let car;

function animatecar(){
    var carStartPosition = -10;
    var carTargetPosition = 10;

    if(!car) return;

    if (car.position.z <= carTargetPosition) {
        car.position.z += speed; 
        if (car.position.z >= carTargetPosition) {
            scene.remove( car );
            car.position.z = carStartPosition;
            speed = getRandomSpeed(0.05, 0.1); // random car speed
            scene.add( car );
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    iFrame ++;
    controls.update();
    animatecar();
    renderer.render(scene, camera);
}
animate();
