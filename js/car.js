let carLoader = new THREE.OBJLoader();
let carMatLoader = new THREE.MTLLoader();

carMatLoader.load("models/car.mtl", materials => {
    materials.preload();

    carLoader.setMaterials(materials);
    carLoader.load(
        "models/car.obj",
        object => {
            object.traverse(node => {                
                if(node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            });        

            object.scale.x = 0.0017;
            object.scale.y = 0.0017;
            object.scale.z = 0.0017;
            object.castShadow = true;

            const frontRightLight = createFrontLight("right");
            const frontLeftLight = createFrontLight("left");
            const backRightLight = createBackLight("right");
            const backLeftLight = createBackLight("left");     
            
            car = new THREE.Group();
            car.add(object);
            car.add(frontRightLight);
            car.add(frontLeftLight);
            car.add(backRightLight);
            car.add(backLeftLight);

            car.position.set(8, -0.35, -10)
            //car.position.set(2, -0.35, 0)

            scene.add(car);
        }
    )
});

function createFrontLight(position) {
    var whiteGlow = new THREE.MeshLambertMaterial({
        color: 0xff0000,
        emissive: 0xffffff
    });

    let lightGeometry = new THREE.BoxGeometry(0.161, 0.03, 0.02);
    let lightMesh = new THREE.Mesh(lightGeometry, whiteGlow);

    let lightSpotLight = new THREE.SpotLight(0x9ca6c1);
    lightSpotLight.position.set(0, 0, 0);
    lightSpotLight.target.position.set(0, -1.5, 5);
    lightSpotLight.castShadow = true;
    lightSpotLight.distance = 5;
    lightSpotLight.intensity = 5;
    lightSpotLight.penumbra = 1;
    lightSpotLight.angle = 0.35;

    let light = new THREE.Group();
    light.add(lightSpotLight, lightSpotLight.target);
    light.add(lightMesh);

    if (position === "right") light.position.set(-0.24, 0.105, 0.63);
    else light.position.set(0.24, 0.105, 0.63);
    

    return light;
}

function createBackLight(position) {
    var redGlow = new THREE.MeshLambertMaterial({
        color: 0xff0000,
        emissive: 0xd81010
    });

    let lightGeometry = new THREE.BoxGeometry(0.12, 0.03, 0.02);
    let lightMesh = new THREE.Mesh(lightGeometry, redGlow);

    let lightSpotLight = new THREE.SpotLight(0x9ca6c1);
    lightSpotLight.position.set(0, 0, 0);
    lightSpotLight.target.position.set(0, -0.5, 5);
    lightSpotLight.castShadow = true;
    lightSpotLight.distance = 5;
    lightSpotLight.intensity = 5;
    lightSpotLight.penumbra = 1;
    lightSpotLight.angle = 0.35;

    let light = new THREE.Group();
    light.add(lightSpotLight, lightSpotLight.target);
    light.add(lightMesh);

    if (position === "right") light.position.set(-0.275, 0.098, -0.63);
    else light.position.set(0.275, 0.098, -0.63);

    return light;
}