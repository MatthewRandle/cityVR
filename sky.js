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

// Rain Drop Texture

var textureRain = new THREE.TextureLoader().load('https://i.imgur.com/F2akTrL.png');
textureRain.wrapS = THREE.RepeatWrapping;
textureRain.wrapT = THREE.RepeatWrapping;
textureRain.repeat.set(1, 1);


rainCount=1000;

rainGeo = new THREE.Geometry();
for(let i=0; i<rainCount; i++) {
  rainDrop = new THREE.Vector3(
    Math.random()*15-5,
    Math.random()*50-10,
    Math.random()*15-5
  )
  rainDrop.velocity = {};
  rainDrop.velocity = 0;
  rainGeo.vertices.push(rainDrop);
}

rainMaterial = new THREE.PointsMaterial({
  map: textureRain,
  //color: 0x1d3876,
  size: .08,
  transparent: true
})

rain = new THREE.Points(rainGeo, rainMaterial);
scene.add(rain)