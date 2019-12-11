var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 ); // Perspective projection parameters
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 1;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // Size of the 2D projection
scene.fog = new THREE.FogExp2(0x060913, 0.002);
renderer.setClearColor(scene.fog.color);
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

let flash, car, van, clouds, currentMaterial, currentVehicle;
let vehicles = [];
let vehicleStartPosition = -8;
let vehicleTargetPosition = 8;

function animateCar(){
    if(!car) return;

    if (car.position.z <= vehicleTargetPosition) {
        car.position.z += speed; 
        if (car.position.z >= vehicleTargetPosition) {
            scene.remove( car );
            car.position.z = vehicleStartPosition;
            speed = getRandomSpeed(0.05, 0.1); // random car speed
            scene.add( car );
        }
    }
}

function animateClouds() {
    if(!clouds) return;
    if (!flash) return;

    clouds.forEach(p => {
        p.rotation.z -= 0.002;
    });

    if (Math.random() > 0.93 || flash.power > 100) {
        if (flash.power < 100)
            flash.position.set(
                Math.random() * 400,
                300 + Math.random() * 200,
                100
            );
        flash.power = 50 + Math.random() * 500;
    }
}

function animateVehicles() {
    if(!vehicles.length || !Array.isArray(vehicles)) return;

    //if we haven't chosen a vehicle yet, chose one 
    if(!currentMaterial || !currentVehicle) {
        let randomVehicle = Math.floor((Math.random() * 2) + 1) - 1; //random number between 0 and 1
        let randomMaterial = Math.floor((Math.random() * 2) + 1) - 1; //random number between 0 and 4 (each vehicle has 5 materials)

        currentVehicle = vehicles[randomVehicle].vehicle;
        currentMaterial = vehicles[randomVehicle].materials[randomMaterial];
        console.log(currentVehicle.children[0]);
        scene.add(currentVehicle);
    }
    else if (currentVehicle.position.z <= vehicleTargetPosition) {
        currentVehicle.position.z += speed;
        if (currentVehicle.position.z >= vehicleTargetPosition) {
            scene.remove(currentVehicle);
            currentVehicle.position.z = vehicleStartPosition;
            currentVehicle = null;
            speed = getRandomSpeed(0.05, 0.1); // random car speed
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    iFrame ++;
    controls.update();
    //animateCar();
    animateVehicles();
    animateClouds();
    renderer.render(scene, camera);
}
animate();
