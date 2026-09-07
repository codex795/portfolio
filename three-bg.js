// =====================================
// THREE.JS CINEMATIC BACKGROUND
// Version 1.0
// =====================================

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
); 

const renderer = new THREE.WebGLRenderer({
canvas:document.createElement("canvas"),
alpha:true,
antialias:true
});

renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

renderer.domElement.style.position="fixed";
renderer.domElement.style.top="0";
renderer.domElement.style.left="0";
renderer.domElement.style.width="100%";
renderer.domElement.style.height="100%";
renderer.domElement.style.zIndex="-20";
renderer.domElement.style.pointerEvents="none";

document.body.prepend(renderer.domElement);

camera.position.z=5;

// ----------------------
// STAR FIELD
// ----------------------

const stars=[];

const starGeo=new THREE.BufferGeometry();

const vertices=[];

for(let i=0;i<2500;i++){

vertices.push(

(Math.random()-0.5)*250,

(Math.random()-0.5)*250,

(Math.random()-0.5)*250

);

}

starGeo.setAttribute(

'position',

new THREE.Float32BufferAttribute(vertices,3)

);

const starMaterial=new THREE.PointsMaterial({

color:0x88dfff,

size:0.25

});

const starField=new THREE.Points(
starGeo,
starMaterial
);

scene.add(starField);

// ----------------------
// LIGHTS
// ----------------------

const ambient=new THREE.AmbientLight(
0x99ddff,
0.5
);

scene.add(ambient);

const moonLight=new THREE.PointLight(
0x55bbff,
2,
300
);

moonLight.position.set(30,20,40);

scene.add(moonLight);

// ----------------------
// MOUSE
// ----------------------

let mouseX=0;
let mouseY=0;

document.addEventListener("mousemove",(e)=>{

mouseX=(e.clientX/window.innerWidth)-0.5;

mouseY=(e.clientY/window.innerHeight)-0.5;

});

// ----------------------
// ANIMATION
// ----------------------

function animate(){

requestAnimationFrame(animate);

starField.rotation.y+=0.0003;
starField.rotation.x+=0.0001;

camera.position.x+=(mouseX*2-camera.position.x)*0.02;

camera.position.y+=(-mouseY*2-camera.position.y)*0.02;

renderer.render(scene,camera);

}

animate();

// ----------------------
// RESIZE
// ----------------------

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(
window.innerWidth,
window.innerHeight
);

});