// street lights
var streetLight1 = new THREE.SpotLight(0x9ca6c1);
streetLight1.position.set(6.7, 2.2, -4.2);
streetLight1.target.position.set(8, 0, -4.2);
streetLight1.intensity = 3;
streetLight1.distance = 20;
streetLight1.penumbra = 1;
streetLight1.angle = Math.PI / 3;
streetLight1.castShadow = true;
scene.add(streetLight1.target, streetLight1);
streetLight1.shadowMapWidth = 1024; // default is 512
streetLight1.shadowMapHeight = 1024; // default is 512

var streetLight2 = new THREE.SpotLight(0x9ca6c1);
streetLight2.position.set(6.7, 2.2, 3.2)
streetLight2.target.position.set(8, 0, 3.2);
streetLight2.intensity = 3;
streetLight2.distance = 20;
streetLight2.penumbra = 1;
streetLight2.angle = Math.PI / 3;
streetLight2.castShadow = true;
scene.add(streetLight2.target, streetLight2);
streetLight2.shadowMapWidth = 1024; // default is 512
streetLight2.shadowMapHeight = 1024; // default is 512

var streetLight3 = new THREE.SpotLight(0xeb9035);
streetLight3.position.set(-3, 2, -2);
streetLight3.target.position.set(-3, 0, -2);
streetLight3.intensity = 2;
streetLight3.distance = 10;
streetLight3.penumbra = 0.8;
streetLight3.angle = Math.PI / 3;
streetLight3.castShadow = true;
scene.add(streetLight3.target, streetLight3);
streetLight3.shadowMapWidth = 1024; // default is 512
streetLight3.shadowMapHeight = 1024; // default is 512

var streetLight4 = new THREE.SpotLight(0xeb9035);
streetLight4.position.set(5, 2, -2);
streetLight4.target.position.set(5, 0, -2);
streetLight4.intensity = 2;
streetLight4.distance = 10;
streetLight4.penumbra = 0.8;
streetLight4.angle = Math.PI / 3;
streetLight4.castShadow = true;
scene.add(streetLight4.target, streetLight4);
streetLight4.shadowMapWidth = 1024; // default is 512
streetLight4.shadowMapHeight = 1024; // default is 512