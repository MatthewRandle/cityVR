var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 110, window.innerWidth / window.innerHeight, 0.1, 2000 ); // Perspective projection parameters
//the Y is important to make it normal when viewing in VR
camera.position.x = 0;
camera.position.y = 0.5;
camera.position.z = 0.1;

var renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight); // Size of the 2D projection
scene.fog = new THREE.FogExp2(0x060913, 0.002);
renderer.setClearColor(scene.fog.color);
document.body.appendChild(renderer.domElement); // Connecting to the canvas

//will be changed when toggle button is clicked
let controls;

//controls used for mouse
let orbitControls = new THREE.OrbitControls( camera, renderer.domElement );
orbitControls.enableDamping = true;
orbitControls.dampingFactor = 0.25;
orbitControls.screenSpacePanning = false;
orbitControls.position0.clientY = 1;
orbitControls.target.set(0.1, 0.5, 0.1);

controls = orbitControls;

let VRControls = new THREE.DeviceOrientationControls(camera);

var effect = new THREE.StereoEffect(renderer);
effect.setSize(window.innerWidth, window.innerHeight);

// shadow mapping enabled 
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMapping;

// Add the ambient light
var lightAmbient = new THREE.AmbientLight( 0x2e334e, 0.2 ); 
scene.add(lightAmbient);

var iFrame = 0;

function getRandomSpeed(min, max) {
  return Math.random() * (max - min) + min;
}

var vehicleSpeed = 0.075; // default car speed

let flash, clouds, currentVehicle, rainGeo;
let vehicles = [];
let vehicleStartPosition = -5;
let vehicleTargetPosition = 5;

function animateSky() {
    if(!clouds) return;
    if (!flash) return;

    //rotate each cloud
    clouds.forEach(p => {
        p.rotation.z -= 0.002;
    });

    if (Math.random() > 0.9 || flash.power > 1000) {
        if (flash.power < 1000)
            flash.position.set(
                Math.random() * 400,
                300 + Math.random() * 200,
                100
            );
        flash.power = 500 + Math.random() * 5000;
    }
}

function animateRain() {
    if(!rainGeo) return;

    rainGeo.vertices.forEach(p => {
        p.velocity -= .0025; // speed of rainfall 
        p.y += p.velocity;
        if (p.y < -10) { // if rain has reached the floor move to the sky again 
            p.y = 30;
            p.velocity = -.1;
        }
    })
    rain.rotation.y += 0.001; // rotate rain, more convincing 
    rainGeo.verticesNeedUpdate = true;
}

function animate() {
    requestAnimationFrame(animate);
    iFrame ++;
    controls.update();
    animateSky();
    animateRain();
    effect.render(scene, camera);
}

animate();
