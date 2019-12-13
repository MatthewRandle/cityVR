let carLoader = new THREE.OBJLoader();
let carMatLoader = new THREE.MTLLoader();

//load in the custom material
carMatLoader.load("models/car.mtl", materials => {
    materials.preload();    
    
    //add the materials to the carLoader
    carLoader.setMaterials(materials);
    carLoader.load(
        "models/car.obj",
        object => {
            //make all the parts of the car cast and receive shadows
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
            
            let car = new THREE.Group();
            car.add(object); //the object has to be the first thing in the group

            //the parked position and rotation of the saloon
            car.position.set(10, -0.4, -2)
            
            scene.add(car);
        }
    )
});

function createFrontLightCar(position) {
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
    if (position === "right") light.position.set(-0.24, 0.105, 0.63);
    else light.position.set(0.24, 0.105, 0.63);
    

    return light;
}

function createBackLightCar(position) {
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
    if (position === "right") light.position.set(-0.275, 0.098, -0.63);
    else light.position.set(0.275, 0.098, -0.63);

    return light;
}