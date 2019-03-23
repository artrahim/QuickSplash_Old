let c = createjs;


stage = new c.Stage("canvasDisplay");

// Make a star to for teh question and answer.
let star = new c.Shape();
star.graphics.beginStroke('#000')
    .setStrokeStyle(0.3)
    .beginFill("#ccc")
    .drawPolyStar(0, 0, 240, 10, 0.54);
star.x = 750;
star.y = 250;
star.scaleX = 3;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let timer = 25;

let blueCircle = new c.Shape()
    .set({x: 20, y: 20});

blueCircle.graphics.s("blue").ss(1);

let blueStartAngle = 1.5708; // Radian = degrees x pi / 180
let blueEndAngle = 0;

blueCircle
    .graphics
    .setStrokeStyle(10)
    .arc(0, 0, 45, blueStartAngle, blueEndAngle);

blueCircle.x = 55;
blueCircle.y = 55;

let redCircle = new c.Shape()
    .set({x: 20, y: 20});

redCircle.graphics.s("red").ss(1);

redCircle
    .graphics
    .setStrokeStyle(10)
    .arc(0, 0, 45, blueEndAngle, blueStartAngle);

redCircle.x = blueCircle.x;
redCircle.y = blueCircle.y;


let timerText = new c.Text(timer, '50px Arial', "black");
timerText.x = 27;
timerText.y = 33;


// Group together the counter + timer
let clock = stage.addChild(new c.Container());
clock.addChild(blueCircle, redCircle, timerText);

clock.x = 20;
clock.y = 20;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let quest = "Where is the worst place to be naked?";

let question = new c.Text(quest, "30px Arial");
question.x = 340;
question.y = 120;

let ans = "_________________________________";

let answer = new c.Text(ans, "30px Arial");
answer.x = 330;
answer.y = 230;


// Group together the question and answer.
let item = stage.addChild(new c.Container());
item.addChild(question, answer);

item.x = 140;
item.y = 50;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// SHOULD USE PRELOAD LATER TO LOAD IMAGES...

// Adding different player splashes

red = new Image();
red.src = "redSplash.png";
red.onload = () => {
    // Adding images...
    let redSplash = new c.Bitmap("redSplash.png");
    redSplash.x = 30;
    redSplash.y = 600;
    // redSplash.scale = 0.1
    stage.addChild(redSplash);
    stage.update();
};

blue = new Image();
blue.src = "blueSplash.png";
blue.onload = () => {
    let blueSplash = new c.Bitmap("blueSplash.png");
    blueSplash.x = 400;
    blueSplash.y = 600;
    stage.addChild(blueSplash);
    stage.update();
};
smiley = new Image();
smiley.src = "simley.png";
smiley.onload = () => {
    let smiley = new c.Bitmap("simley.png");
    smiley.x = 515;
    smiley.y = 690;
    stage.addChild(smiley);
    stage.update();
};

orange = new Image();
orange.src = "orangeSplash.png";
orange.onload = () => {
    let orangeSplash = new c.Bitmap("orangeSplash.png");
    orangeSplash.x = 800;
    orangeSplash.y = 600;
    stage.addChild(orangeSplash);
    stage.update();
};

pink = new Image();
pink.src = "pinkSplash.png";
pink.onload = () => {
    let pinkSplash = new c.Bitmap("pinkSplash.png");
    pinkSplash.x = 1200;
    pinkSplash.y = 600;
    stage.addChild(pinkSplash);
    stage.update();
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


stage.addChild(clock, star, item);

stage.update();


