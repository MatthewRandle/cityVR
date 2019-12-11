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
var lightAmbient = new THREE.AmbientLight( 0x2e334e, 0.1 ); 
scene.add(lightAmbient);

var iFrame = 0;

function getRandomSpeed(min, max) {
  return Math.random() * (max - min) + min;
}

var vehicleSpeed = 0.05; // default car speed

let flash, car, van, clouds, currentVehicle;
let vehicles = [];
let vehicleStartPosition = -8;
let vehicleTargetPosition = 8;

function animateSky() {
    if(!clouds) return;
    if (!flash) return;

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

function animateVehicles() {
    if(!vehicles.length || !Array.isArray(vehicles)) return;

    //if we haven't chosen a vehicle yet, chose one 
    if(!currentVehicle) {
        let randomVehicle = Math.floor((Math.random() * 2) + 1) - 1; //random number between 0 and 1
        currentVehicle = vehicles[randomVehicle];

        //find mesh for the body and add a random color to it
        currentVehicle.traverse(child => {
            if(child instanceof THREE.Mesh) {
                if(child.name === "Body" && child.material.length && Array.isArray(child.material)) {
                    let color = new THREE.Color(0xffffff);
                    color.setHex(Math.random() * 0xffffff);
                    
                    for(let i = 0; i < child.material.length; i++) {
                        if(child.material[i].name === "Body") {
                            child.material[i].color = color;
                            i = child.material.length;
                        }
                    }
                }
            }
        })

        scene.add(currentVehicle);
    }
    else if (currentVehicle.position.z <= vehicleTargetPosition) {
        currentVehicle.position.z += vehicleSpeed;

        if (currentVehicle.position.z >= vehicleTargetPosition) {
            scene.remove(currentVehicle);
            currentVehicle.position.z = vehicleStartPosition;
            currentVehicle = null;
            vehicleSpeed = getRandomSpeed(0.05, 0.1); // random car speed
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    iFrame ++;
    controls.update();
    animateVehicles();
    animateSky();
    renderer.render(scene, camera);
}
animate();
