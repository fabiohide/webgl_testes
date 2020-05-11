function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {

    //angle = 0.07;


    background(175);

    rectMode(CENTER);
    noStroke();
    normalMaterial()
    rotateY(frameCount * 0.05);
    rotateX(frameCount * 0.03);
    torus(30, 15);

    //angle += 2.07;

}