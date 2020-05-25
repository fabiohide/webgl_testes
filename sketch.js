sizeW = 42;
sizeH = 36;
ax = 0;
ay = 0;
dirx = 0;
diry = 0;
trx = 0;
Try = 0;

let value = 1;

function preload() {

    cato = loadImage('cato.png');
    corpo1 = loadModel('pvc.obj');

}

function setup() {
    createCanvas(720, 1080, WEBGL);
    background(0);

}

function draw() {

    translate(0, 0, 550)

    rotation();
    move();
    thereshold();

    //single();
    array();



}

function rotation() {
    rotateY(frameCount * 0.01);
    rotateX(frameCount * 0.01);
}

function thereshold() {

    trxp = 90
    trxn = -90
    tryp = 120
    tryn = -120

    if (ax > trxp) {
        ax = trxp;
    } else if (ax < trxn) {
        ax = trxn;
    }

    if (ay > tryp) {
        ay = tryp;
    } else if (ay < tryn) {
        ay = tryn;
    }

}

function move() {

    ax += dirx + trx;
    ay += diry + Try;
    translate(ax, 0, ay)
}

function array() {

    for (y = -90; y <= width; y += sizeH) {
        for (x = -176; x <= height; x += sizeW) {
            fill(255, 0, 0);
            normalMaterial()
            model(corpo1);
            translate(y, x);
        }
    }
}

function single() {
    normalMaterial();
    model(corpo1);

}

function keyReleased() {
    dirx = 0;
    if (ax = 0) {
        trx = 0;
    }

    diry = 0;
    if (ay = 0) {
        Try = 0;
    }

}

function keyPressed() {
    print(ax);
    if (keyCode === LEFT_ARROW) {
        value += 80;
        dirx = -6;
    } else if (keyCode === RIGHT_ARROW) {
        value += -80;
        dirx = 6;
        return false;
    }

    if (keyCode === UP_ARROW) {
        diry = -5;
    } else if (keyCode === DOWN_ARROW) {
        diry = 5;
        return false;
    }

}