let saloonLoader = new THREE.OBJLoader();
let saloonMatLoader = new THREE.MTLLoader();

//load in the custom material
saloonMatLoader.load("models/saloon.mtl", materials => {
    materials.preload();    
    
    //add the materials to the saloonLoader
    saloonLoader.setMaterials(materials);
    saloonLoader.load(
        "models/saloon.obj",
        object => {
            //make all the parts of the saloon cast and receive shadows
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

            //create the lights for the saloon
            const frontRightLight = createFrontLightSaloon("right");
            const frontLeftLight = createFrontLightSaloon("left");
            const backRightLight = createBackLightSaloon("right");
            const backLeftLight = createBackLightSaloon("left");     
            
            //group contains lights and mesh
            let saloon = new THREE.Group();
            saloon.add(object); //the object has to be the first thing in the group
            saloon.add(frontRightLight);
            saloon.add(frontLeftLight);
            saloon.add(backRightLight);
            saloon.add(backLeftLight);

            //the parked position and rotation of the saloon
            saloon.position.set(-8, -0.2, -2)
            
            scene.add(saloon);
        }
    )
});

function createFrontLightSaloon(position) {
    //create a material that is 'glow in the dark' for our lights
    var whiteGlow = new THREE.MeshLambertMaterial({
        color: 0xff0000,
        emissive: 0xffffff
    });

    //the mesh for the lights
    let lightGeometry = new THREE.BoxGeometry(0.161, 0.03, 0.02);
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
    if (position === "right") light.position.set(-0.215, 0, 0.89);
    else light.position.set(0.215, 0, 0.89);
    

    return light;
}

function createBackLightSaloon(position) {
    //create a 'glow in the dark' material
    var redGlow = new THREE.MeshLambertMaterial({
        color: 0xff0000,
        emissive: 0xd81010
    });

    let lightGeometry = new THREE.BoxGeometry(0.12, 0.03, 0.02);
    let lightMesh = new THREE.Mesh(lightGeometry, redGlow);

    let light = new THREE.Group();
    light.add(lightMesh);

     //position depending on if right or left
    if (position === "right") light.position.set(-0.215, -0.01, -0.82);
    else light.position.set(0.215, -0.01, -0.82);

    return light;
}