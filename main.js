import './style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();
//this is the perspective camera
//PerspectiveCamera(FieldOfView, Aspect Ratio, near clip, far clip)
//near and far clip means that objects closer or farther from these wont be rendered.
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10 );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});
renderer.setSize( window.innerWidth, window.innerHeight );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
const animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
  };

  animate();