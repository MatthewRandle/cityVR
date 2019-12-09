var geometrySmallBuilding = new THREE.BoxGeometry(3, 3.5, 3);
var geometryMediumBuilding = new THREE.BoxGeometry(8, 6, 3);
var geometryLargeBuilding = new THREE.BoxGeometry(1, 7, 15);
var geometryTallBuilding = new THREE.BoxGeometry(3, 15, 3);
var geometryfloor = new THREE.PlaneGeometry(30, 30, 30);
var geometryroad = new THREE.PlaneGeometry(12, 3.225, 2);
var geometrypavement = new THREE.BoxGeometry(12, .5, 2);
var geometrypavement2 = new THREE.BoxGeometry(15, .5, 2);

var textureb1 = new THREE.TextureLoader().load('https://i.imgur.com/mzNKmbI.jpg3');
textureb1.wrapS = THREE.RepeatWrapping;
textureb1.wrapT = THREE.RepeatWrapping;
textureb1.repeat.set(1, 1);

var textureb2 = new THREE.TextureLoader().load('https://i.imgur.com/Vyc51yj.jpg');
textureb2.wrapS = THREE.RepeatWrapping;
textureb2.wrapT = THREE.RepeatWrapping;
textureb2.repeat.set(1, 1);

//tesxtureb3 to add
//textureb4 to add

var textureb4 = new THREE.TextureLoader().load('https://i.imgur.com/b4gTFPE.jpg');
textureb4.wrapS = THREE.RepeatWrapping;
textureb4.wrapT = THREE.RepeatWrapping;
textureb4.repeat.set(1, 1);

var textureb5 = new THREE.TextureLoader().load('https://i.imgur.com/nmgvZ2y.jpg');
textureb5.wrapS = THREE.RepeatWrapping;
textureb5.wrapT = THREE.RepeatWrapping;
textureb5.repeat.set(1.5, 1);

var textureb6 = new THREE.TextureLoader().load('https://i.imgur.com/ai27Mai.jpg');
textureb6.wrapS = THREE.RepeatWrapping;
textureb6.wrapT = THREE.RepeatWrapping;
textureb6.repeat.set(1.5, 1);

var textureb7 = new THREE.TextureLoader().load('https://i.imgur.com/ZB0WK6M.jpg');
textureb7.wrapS = THREE.RepeatWrapping;
textureb7.wrapT = THREE.RepeatWrapping;
textureb7.repeat.set(1, 8);

var texturebfloor = new THREE.TextureLoader().load('https://i.imgur.com/lyBXGGd.jpg');
texturebfloor.wrapS = THREE.RepeatWrapping;
texturebfloor.wrapT = THREE.RepeatWrapping;
texturebfloor.repeat.set(50, 50);

var texturepavement = new THREE.TextureLoader().load('https://i.imgur.com/WDl05sW.jpg');
texturepavement.wrapS = THREE.RepeatWrapping;
texturepavement.wrapT = THREE.RepeatWrapping;
texturepavement.repeat.set(6, 2.05);

var textureroad = new THREE.TextureLoader().load('https://i.imgur.com/FkdVt4F.jpg');
textureroad.wrapS = THREE.RepeatWrapping;
textureroad.wrapT = THREE.RepeatWrapping;
textureroad.repeat.set(1, 1);

var materialfloor = new THREE.MeshPhongMaterial({ map: texturebfloor });

var materialroad = new THREE.MeshPhongMaterial({
    map: textureroad,
    bumpMap: new THREE.TextureLoader().load('https://i.imgur.com/oaj63mP.jpg'),
    shininess: 100
});

var materialpavement = new THREE.MeshPhongMaterial({
    map: texturepavement,
    shininess: 100
});

var materialLargeBuilding = new THREE.MeshPhongMaterial({ map: textureb5 });

var materialLargeBuilding2 = new THREE.MeshPhongMaterial({ map: textureb6 });

var materialTallBuilding = new THREE.MeshPhongMaterial({ map: textureb7 });

var materialSmallBuilding = new THREE.MeshPhongMaterial({
    map: textureb1,
    bumpMap: new THREE.TextureLoader().load('https://i.imgur.com/IEvcznT.jpg')
});

var materialSmallBuilding2 = new THREE.MeshPhongMaterial({
    map: textureb4,
    bumpMap: new THREE.TextureLoader().load('https://i.imgur.com/zq1xrOV.jpg')
});

var materialMediumBuilding2 = new THREE.MeshPhongMaterial({ color: 0xff0000 });

var materialMediumBuilding = new THREE.MeshPhongMaterial({
    map: textureb2,
    bumpMap: new THREE.TextureLoader().load('https://i.imgur.com/io4ThYx.jpg'),
    shininess: 40
});

var b1 = new THREE.Mesh(geometrySmallBuilding, materialSmallBuilding);
b1.position.z = -4.2;
b1.position.x = 4.8;
b1.position.y = 1.2;
b1.castShadow = true;
scene.add(b1);

var b2 = new THREE.Mesh(geometryMediumBuilding, materialMediumBuilding);
b2.position.z = -4;
b2.position.x = -.6;
b2.position.y = 2.45;
b2.castShadow = true;
b2.receiveShadow = true;
scene.add(b2);

var b3 = new THREE.Mesh(geometryMediumBuilding, materialMediumBuilding2);
b3.position.z = 4;
b3.position.x = 2.5;
b3.position.y = 2.45;
b3.castShadow = true;
scene.add(b3);

var b4 = new THREE.Mesh(geometrySmallBuilding, materialSmallBuilding2);
b4.position.z = 4.2;
b4.position.x = -3;
b4.position.y = 1.2;
b4.castShadow = true;
scene.add(b4);

var b5 = new THREE.Mesh(geometryLargeBuilding, materialLargeBuilding);
b5.position.x = 12;
b5.position.y = 2.95;
b5.receiveShadow = true;
b5.castShadow = true;
scene.add(b5);

var b6 = new THREE.Mesh(geometryLargeBuilding, materialLargeBuilding2);
b6.position.x = -10;
b6.position.y = 2.95;
b6.receiveShadow = true;
b6.castShadow = true;
scene.add(b6);

var b7 = new THREE.Mesh(geometryTallBuilding, materialTallBuilding);
b7.position.x = -12;
b7.position.z = -5;
b7.position.y = 8.45;
b7.receiveShadow = true;
b7.castShadow = true;
scene.add(b7);

var floor = new THREE.Mesh(geometryfloor, materialfloor);
floor.rotateX(-Math.PI * 0.5);
floor.position.y = -.55;
floor.receiveShadow = true;
scene.add(floor);

var road = new THREE.Mesh(geometryroad, materialroad);
road.rotateX(-Math.PI * 0.5);
road.position.y = -.549;
road.position.x = 1;
road.receiveShadow = true;
road.bumpScale = 0.1;
scene.add(road);

var pavement = new THREE.Mesh(geometrypavement, materialpavement);
pavement.receiveShadow = true;
pavement.position.x = 1;
pavement.position.z = -2.6;
pavement.position.y = -.74;
pavement.castShadow = true;
scene.add(pavement);

var pavement2 = new THREE.Mesh(geometrypavement, materialpavement);
pavement2.receiveShadow = true;
pavement2.position.x = 1;
pavement2.position.z = 2.6;
pavement2.position.y = -.74;
pavement2.castShadow = true;
scene.add(pavement2);

var pavement3 = new THREE.Mesh(geometrypavement2, materialpavement);
pavement3.receiveShadow = true;
pavement3.position.x = 11.5;
pavement3.position.z = 0;
pavement3.position.y = -.74;
pavement3.castShadow = true;
pavement3.rotateY(-Math.PI * 0.5);
scene.add(pavement3);

var pavement4 = new THREE.Mesh(geometrypavement2, materialpavement);
pavement4.receiveShadow = true;
pavement4.position.x = -9.5;
pavement4.position.z = 0;
pavement4.position.y = -.74;
pavement4.castShadow = true;
pavement4.rotateY(-Math.PI * 0.5);
scene.add(pavement4);