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

createHiddenLights();

function createStreetLights(object) {
    const spotLight1 = createStreetSpotLight(true);
    let streetLight1 = new THREE.Group();
    streetLight1.add(object.clone());
    streetLight1.add(spotLight1, spotLight1.target);
    streetLight1.position.set(10.75, -0.5, -3);

    const spotLight2 = createStreetSpotLight(true);
    let streetLight2 = new THREE.Group();
    streetLight2.add(object.clone());
    streetLight2.add(spotLight2, spotLight2.target);
    streetLight2.position.set(10.75, -0.5, 3);

    const spotLight3 = createStreetSpotLight(true);
    let streetLight3 = new THREE.Group();
    streetLight3.add(object.clone());
    streetLight3.add(spotLight3, spotLight3.target);
    streetLight3.position.set(-8.75, -0.5, -3);
    streetLight3.rotation.y = Math.PI / 1;

    const spotLight4 = createStreetSpotLight(true);
    let streetLight4 = new THREE.Group();
    streetLight4.add(object.clone());
    streetLight4.add(spotLight4, spotLight4.target);
    streetLight4.position.set(-8.75, -0.5, 3);
    streetLight4.rotation.y = Math.PI / 1;
    
    scene.add(streetLight1);
    scene.add(streetLight2);
    scene.add(streetLight3);
    scene.add(streetLight4);
}

function createStreetSpotLight(castShadow) {
    let spotLight = new THREE.SpotLight(0x9ca6c1);
    spotLight.position.set(-0.45, 4, 0);
    spotLight.target.position.set(-0.45, 0, 0);
    spotLight.castShadow = castShadow;
    spotLight.distance = 9;
    spotLight.intensity = 3;
    spotLight.penumbra = 1;
    spotLight.angle = 0.5;
    spotLight.shadowMapWidth = 1024; // default is 512
    spotLight.shadowMapHeight = 1024; // default is 512

    return spotLight;
}

function createHiddenLights() {
    const hiddenLight1 = createStreetSpotLight(false);
    hiddenLight1.position.set(7, 4, 3);
    hiddenLight1.target.position.set(7, 0, 3);

    const hiddenLight2 = createStreetSpotLight(false);
    hiddenLight2.position.set(7, 4, -3);
    hiddenLight2.target.position.set(7, 0, -3);

    const hiddenLight3 = createStreetSpotLight(false);
    hiddenLight3.position.set(-6, 4, 3);
    hiddenLight3.target.position.set(-6, 0, 3);

    const hiddenLight4 = createStreetSpotLight(false);
    hiddenLight4.position.set(-6, 4, -3);
    hiddenLight4.target.position.set(-6, 0, -3);

    scene.add(hiddenLight1, hiddenLight1.target);
    scene.add(hiddenLight2, hiddenLight2.target);
    scene.add(hiddenLight3, hiddenLight3.target);
    scene.add(hiddenLight4, hiddenLight4.target);
}