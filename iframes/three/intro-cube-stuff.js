import * as THREE from "https://cdn.skypack.dev/three@0.136.0";

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
var clock = new THREE.Clock();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 2;

var render = function () {
  requestAnimationFrame(render);
  var delta = clock.getDelta();
  cube.rotation.x += 1.2 * delta;
  cube.rotation.y += 1.2 * delta;
  renderer.render(scene, camera);
  };

render();