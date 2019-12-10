// street lights
let streetLightLoader = new THREE.OBJLoader();
let streetLightMatLoader = new THREE.MTLLoader();

streetLightMatLoader.load("models/streetlight.mtl", materials => {
    materials.preload();

    streetLightLoader.setMaterials(materials);
    streetLightLoader.load(
        "models/streetlight.obj",
        object => {
            object.traverse(node => {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            });

            object.scale.x = 0.0017;
            object.scale.y = 0.0017;
            object.scale.z = 0.0017;
            object.castShadow = true;
            object.rotation.y = Math.PI / -2;

            /* let streetLight = new THREE.Group();
            streetLight.add(object);
            streetLight.add(spotLight, spotLight.target); */
            createStreetLights(object);
        }
    )
});

function createStreetLights(object) {
    const spotLight1 = createStreetSpotLight();
    let streetLight1 = new THREE.Group();
    streetLight1.add(object.clone());
    streetLight1.add(spotLight1, spotLight1.target);
    streetLight1.position.set(11, -0.5, -3);

    const spotLight2 = createStreetSpotLight();
    let streetLight2 = new THREE.Group();
    streetLight2.add(object.clone());
    streetLight2.add(spotLight2, spotLight2.target);
    streetLight2.position.set(11, -0.5, 3);
    
    scene.add(streetLight1);
    scene.add(streetLight2);
}

function createStreetSpotLight() {
    let spotLight = new THREE.SpotLight(0x9ca6c1);
    spotLight.position.set(-0.45, 2.75, 0);
    spotLight.target.position.set(-0.45, 0, 0);
    spotLight.castShadow = true;
    spotLight.distance = 9;
    spotLight.intensity = 4;
    spotLight.penumbra = 1;
    spotLight.angle = 0.5;
    spotLight.shadowMapWidth = 1024; // default is 512
    spotLight.shadowMapHeight = 1024; // default is 512

    return spotLight;
}

var streetLight3 = new THREE.SpotLight(0x9ca6c1);
streetLight3.position.set(7, 4, 3);
streetLight3.target.position.set(7, 0, 3);
streetLight3.castShadow = true;
streetLight3.distance = 7;
streetLight3.intensity = 8;
streetLight3.penumbra = 1;
streetLight3.angle = 0.35;
streetLight3.shadowMapWidth = 1024; // default is 512
streetLight3.shadowMapHeight = 1024; // default is 512
scene.add(streetLight3);
scene.add(streetLight3.target);

var streetLight4 = new THREE.SpotLight(0x9ca6c1);
streetLight4.position.set(7, 4, -3);
streetLight4.target.position.set(7, 0, -3);
streetLight4.castShadow = true;
streetLight4.distance = 7;
streetLight4.intensity = 8;
streetLight4.penumbra = 1;
streetLight4.angle = 0.35;
streetLight4.shadowMapWidth = 1024; // default is 512
streetLight4.shadowMapHeight = 1024; // default is 512
scene.add(streetLight4, streetLight4.target);

//alley lights
var alleyLight1 = new THREE.SpotLight(0xeb9035);
alleyLight1.position.set(-3, 2, -2);
alleyLight1.target.position.set(-3, 0, -2);
alleyLight1.intensity = 1;
alleyLight1.distance = 10;
alleyLight1.penumbra = 0.5;
alleyLight1.angle = Math.PI / 3;
alleyLight1.castShadow = true;
scene.add(alleyLight1.target, alleyLight1);
alleyLight1.shadowMapWidth = 1024; // default is 512
alleyLight1.shadowMapHeight = 1024; // default is 512

var alleyLight2 = new THREE.SpotLight(0xeb9035);
alleyLight2.position.set(5, 2, -2);
alleyLight2.target.position.set(5, 0, -2);
alleyLight2.intensity = 1;
alleyLight2.distance = 10;
alleyLight2.penumbra = 0.5;
alleyLight2.angle = Math.PI / 3;
alleyLight2.castShadow = true;
scene.add(alleyLight2.target, alleyLight2);
alleyLight2.shadowMapWidth = 1024; // default is 512
alleyLight2.shadowMapHeight = 1024; // default is 512