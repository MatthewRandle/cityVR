let alleyLightLoader = new THREE.OBJLoader();
let alleyLightMatLoader = new THREE.MTLLoader();

alleyLightMatLoader.load("models/alleylight.mtl", materials => {
    materials.preload();

    alleyLightLoader.setMaterials(materials);
    alleyLightLoader.load(
        "models/alleylight.obj",
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

            createAlleyLights(object);
        }
    )
});

function createAlleyLights(object) {
    const pointLight1 = createAlleyPointLight();
    let streetLight1 = new THREE.Group();
    streetLight1.add(object.clone());
    streetLight1.add(pointLight1);
    streetLight1.position.set(-3, 0.75, -2.4);

    const pointLight2 = createAlleyPointLight();
    let streetLight2 = new THREE.Group();
    streetLight2.add(object.clone());
    streetLight2.add(pointLight2);
    streetLight2.position.set(1, 0.75, -2.4);

    const pointLight3 = createAlleyPointLight();
    let streetLight3 = new THREE.Group();
    streetLight3.add(object.clone());
    streetLight3.add(pointLight3);
    streetLight3.position.set(4, 0.75, 2.4);
    streetLight3.rotation.y = Math.PI / -2;

    scene.add(streetLight1);
    scene.add(streetLight2);
    scene.add(streetLight3);
}

function createAlleyPointLight() {
    let pointLight = new THREE.PointLight(0x9ca6c1);
    pointLight.position.set(0, 0, 0);
    pointLight.distance = 3;
    pointLight.intensity = 0.7;

    return pointLight;
}