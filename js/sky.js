let loader = new THREE.TextureLoader();

clouds = [];

loader.load("textures/cloud.png", function (texture) {
    cloudGeo = new THREE.PlaneBufferGeometry(500, 500);
    cloudMaterial = new THREE.MeshLambertMaterial({
        map: texture,
        transparent: true,
        depthWrite: false
    });

    //create 50 clouds
    for (let i = 0; i < 50; i++) {
        let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);

        //randomize the position of the clouds
        cloud.position.set(
            Math.random() * 1000 - 400,
            750 - i,
            Math.random() * 1000 - 450
        );
        cloud.rotation.x = 1.16;
        cloud.rotation.y = -0.12;
        cloud.rotation.z = Math.random() * 360;

        //make it so you can see clouds behind other clouds
        cloud.material.opacity = 0.6;

        clouds.push(cloud);

        scene.add(cloud);
    };
});

flash = new THREE.PointLight(0x062d89, 1, 400, 1.7);
flash.position.set(0, 300, 0);

scene.add(flash);

// Rain Drop Texture
var textureRain = new THREE.TextureLoader().load('textures/rain.png');

rainCount = 1000;

rainGeo = new THREE.Geometry();

//randomize the position of the rain partacles within specific area
for (let i = 0; i < rainCount; i++) {
    rainDrop = new THREE.Vector3(
        Math.random() * 40 - 20,
        Math.random() * 500 - 250,
        Math.random() * 40 - 20
    )
    rainDrop.velocity = {};
    rainDrop.velocity = 0;
    rainGeo.vertices.push(rainDrop);
}

//rain matirial 
rainMaterial = new THREE.PointsMaterial({
    map: textureRain,
    size: .08,
    opacity: 0.6
})

rain = new THREE.Points(rainGeo, rainMaterial);
scene.add(rain);