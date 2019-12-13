let vanLoader = new THREE.OBJLoader();
let vanMatLoader = new THREE.MTLLoader();

//load in the custom material
vanMatLoader.load("models/van.mtl", materials => {
    materials.preload();

    //add the materials to the vanLoader
    vanLoader.setMaterials(materials);
    vanLoader.load(
        "models/van.obj",
        object => {
            //make all the parts of the van cast and receive shadows
            object.traverse(node => {                
                if(node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            });        

            //scale model accordingly to the scene
            object.scale.x = 0.0017;
            object.scale.y = 0.0017;
            object.scale.z = 0.0017;
            object.castShadow = true;

            //create the lights for the van
            const frontRightLight = createFrontLightVan("right");
            const frontLeftLight = createFrontLightVan("left");
            const backRightLight = createBackLightVan("right");
            const backLeftLight = createBackLightVan("left");     
            
            //group contains lights and mesh
            let van = new THREE.Group();
            van.add(object); //the object has to be the first thing in the group
            van.add(frontRightLight);
            van.add(frontLeftLight);
            van.add(backRightLight);
            van.add(backLeftLight);
            
            //the parked position and rotation of the van
            van.position.set(3, 0.02, 1)
            van.rotation.y = Math.PI / -2;
            
            scene.add(van);
        }
    )
});

function createFrontLightVan(position) {
    //create a material that is 'glow in the dark' for our lights
    var whiteGlow = new THREE.MeshLambertMaterial({
        color: 0xff0000,
        emissive: 0xffffff
    });

    //the mesh for the lights
    let lightGeometry = new THREE.BoxGeometry(0.25, 0.05, 0.02);
    let lightMesh = new THREE.Mesh(lightGeometry, whiteGlow);

    //create the actual light
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

    //position depending on if right or left
    if (position === "right") light.position.set(-0.4, -0.05, 1.1);
    else light.position.set(0.3, -0.05, 1.1);    

    return light;
}

function createBackLightVan(position) {
    //create a 'glow in the dark' material
    var redGlow = new THREE.MeshLambertMaterial({
        color: 0xff0000,
        emissive: 0xd81010
    });

    let lightGeometry = new THREE.BoxGeometry(0.25, 0.05, 0.02);
    let lightMesh = new THREE.Mesh(lightGeometry, redGlow);

    let light = new THREE.Group();
    light.add(lightMesh);

    //position depending on if right or left
    if (position === "right") light.position.set(-0.4, 0, -0.96);
    else light.position.set(0.3, 0, -0.96);

    return light;
}