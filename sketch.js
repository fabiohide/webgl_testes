function preload() {


    corpo1 = loadModel('pvc.obj');

}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {

    //angle = 0.07;


    background(175);

    //rectMode(CORNER);
    //noStroke();
    normalMaterial()
    rotateY(frameCount * 0.15);
    rotateX(frameCount * 0.03);
    model(corpo1, 100, 100);

}