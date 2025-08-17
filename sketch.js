let sphereX;
let sphereY;
let sphereZ;

let centerX = 0;
let centerY = 0;
let centerZ = 0;


function setup() {
  createCanvas(400, 400, WEBGL);
  camera();
  noStroke();
}

function draw() {
  orbitControl();
  background("grey");
  
  fill((100,100,100));
  
  sphereX = centerX + cos(millis()/1000) * 100;
  sphereZ = centerY + sin(millis()/1000) * 100;
  sphereY = 0;
  pointLight(255, 255, 255, sphereX-100, sphereY-100, -100);
  translate(sphereX, sphereY, sphereZ)
  sphere(20,15,15);
  
  
}