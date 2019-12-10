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
            object.position.set(8, -0.35, 0);
            object.castShadow = true;
            car = object;
            scene.add(object);
        }
    )
});