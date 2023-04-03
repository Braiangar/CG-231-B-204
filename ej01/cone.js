var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);


l = 1.5; 

 // Cudrados

        var geometry1 = new THREE.BoxGeometry( l,l,l);
        var material1 = new THREE.MeshBasicMaterial( { color: 0x00ff00} );
        var cube1 = new THREE.Mesh( geometry1, material1 );
        scene.add( cube1 );


        var geometry2 = new THREE.BoxGeometry( l,l,l );
        var material2 = new THREE.MeshBasicMaterial( { color: 0x00ff00} );
        scene.add( cube2 );


        var geometry3 = new THREE.BoxGeometry( l,l,l );
        var material3 = new THREE.MeshBasicMaterial( { color: 0x00ff00} );
        var cube3 = new THREE.Mesh( geometry3, material3 );
        scene.add( cube3 );

  // Escalar
      	geometry2.scale(1/2, 1/2, 1/2);
      	geometry3.scale(1/4, 1/4, 1/4 );

  // Transladar
        geometry1.translate(lado/2,lado/2,lado/2 );
        geometry2.translate(lado/2,lado + lado/4,lado/2 );
        geometry3.translate( lado/2 ,lado + lado/2 + lado/8, lado/2  );


const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();