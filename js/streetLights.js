// street lights
var streetLight1 = new THREE.SpotLight(0x9ca6c1);
streetLight1.position.set(11, 4, -3);
streetLight1.target.position.set(11, 0, -3);
streetLight1.castShadow = true;
streetLight1.distance = 7;
streetLight1.intensity = 8;
streetLight1.penumbra = 1;
streetLight1.angle = 0.35;
streetLight1.shadowMapWidth = 1024; // default is 512
streetLight1.shadowMapHeight = 1024; // default is 512
scene.add(streetLight1);
scene.add(streetLight1.target);

var streetLight2 = new THREE.SpotLight(0x9ca6c1);
streetLight2.position.set(11, 4, 3);
streetLight2.target.position.set(11, 0, 3);
streetLight2.castShadow = true;
streetLight2.distance = 7;
streetLight2.intensity = 8;
streetLight2.penumbra = 1;
streetLight2.angle = 0.35;
streetLight2.shadowMapWidth = 1024; // default is 512
streetLight2.shadowMapHeight = 1024; // default is 512
scene.add(streetLight2);
scene.add(streetLight2.target);

var streetLight3 = new THREE.SpotLight(0x9ca6c1);
streetLight3.position.set(7, 4, 3);
streetLight3.target.position.set(7, 0, 3);
streetLight3.castShadow = true;
streetLight3.distance = 7;
streetLight3.intensity = 8;
streetLight3.penumbra = 1;
streetLight3.angle = 0.35;
streetLight3.shadowMapWidth = 1024; // default is 512
streetLight3.shadowMapHeight = 1024; // default is 512
scene.add(streetLight3);
scene.add(streetLight3.target);

var streetLight4 = new THREE.SpotLight(0x9ca6c1);
streetLight4.position.set(7, 4, -3);
streetLight4.target.position.set(7, 0, -3);
streetLight4.castShadow = true;
streetLight4.distance = 7;
streetLight4.intensity = 8;
streetLight4.penumbra = 1;
streetLight4.angle = 0.35;
streetLight4.shadowMapWidth = 1024; // default is 512
streetLight4.shadowMapHeight = 1024; // default is 512
scene.add(streetLight4, streetLight4.target);

//alley lights
var alleyLight1 = new THREE.SpotLight(0xeb9035);
alleyLight1.position.set(-3, 2, -2);
alleyLight1.target.position.set(-3, 0, -2);
alleyLight1.intensity = 1;
alleyLight1.distance = 10;
alleyLight1.penumbra = 0.5;
alleyLight1.angle = Math.PI / 3;
alleyLight1.castShadow = true;
scene.add(alleyLight1.target, alleyLight1);
alleyLight1.shadowMapWidth = 1024; // default is 512
alleyLight1.shadowMapHeight = 1024; // default is 512

var alleyLight2 = new THREE.SpotLight(0xeb9035);
alleyLight2.position.set(5, 2, -2);
alleyLight2.target.position.set(5, 0, -2);
alleyLight2.intensity = 1;
alleyLight2.distance = 10;
alleyLight2.penumbra = 0.5;
alleyLight2.angle = Math.PI / 3;
alleyLight2.castShadow = true;
scene.add(alleyLight2.target, alleyLight2);
alleyLight2.shadowMapWidth = 1024; // default is 512
alleyLight2.shadowMapHeight = 1024; // default is 512