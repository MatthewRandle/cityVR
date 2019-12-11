let loader = new THREE.TextureLoader();

clouds = [];

loader.load("textures/cloud.png", function (texture) {
    cloudGeo = new THREE.PlaneBufferGeometry(500, 500);
    cloudMaterial = new THREE.MeshLambertMaterial({
        map: texture,
        transparent: true,
        depthWrite: false
    });

    for (let i = 0; i < 50; i++) {
        let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
        cloud.position.set(
            Math.random() * 1000 - 400,
            750 - i,
            Math.random() * 1000 - 450
        );
        cloud.rotation.x = 1.16;
        cloud.rotation.y = -0.12;
        cloud.rotation.z = Math.random() * 360;
        cloud.material.opacity = 0.6;
        clouds.push(cloud);
        scene.add(cloud);
    };
});

flash = new THREE.PointLight(0x062d89, 1, 400, 1.7);
flash.position.set(0, 300, 0);
scene.add(flash);