let vanLoader = new THREE.OBJLoader();
let vanMatLoader = new THREE.MTLLoader();

vanMatLoader.load("models/van.mtl", materials => {
    materials.preload();

    vanLoader.setMaterials(materials);
    vanLoader.load(
        "models/van.obj",
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

            const frontRightLight = createFrontLightVan("right");
            const frontLeftLight = createFrontLightVan("left");
            const backRightLight = createBackLightVan("right");
            const backLeftLight = createBackLightVan("left");     
            
            van = new THREE.Group();
            van.add(object);
            van.add(frontRightLight);
            van.add(frontLeftLight);
            van.add(backRightLight);
            van.add(backLeftLight);
            
            van.position.set(8, 0.02, -7)

            vehicles.push(van);
        }
    )
});

function createFrontLightVan(position) {
    var whiteGlow = new THREE.MeshLambertMaterial({
        color: 0xff0000,
        emissive: 0xffffff
    });

    let lightGeometry = new THREE.BoxGeometry(0.25, 0.05, 0.02);
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

    if (position === "right") light.position.set(-0.4, -0.05, 1.1);
    else light.position.set(0.3, -0.05, 1.1);    

    return light;
}

function createBackLightVan(position) {
    var redGlow = new THREE.MeshLambertMaterial({
        color: 0xff0000,
        emissive: 0xd81010
    });

    let lightGeometry = new THREE.BoxGeometry(0.25, 0.05, 0.02);
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

    if (position === "right") light.position.set(-0.4, 0, -0.96);
    else light.position.set(0.3, 0, -0.96);

    return light;
}