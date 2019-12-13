var geometryMoon = new THREE.SphereGeometry(2.4, 50, 10);
var materialMoon = new THREE.MeshBasicMaterial({color: 0xccc3af});

var moon = new THREE.Mesh(geometryMoon, materialMoon);
moon.position.z = 20;
moon.position.x = 100;
moon.position.y = 150;
scene.add(moon);
