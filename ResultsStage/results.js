let c = createjs;


stage = new c.Stage("canvasDisplay");

// Make a star for answer 1
let star1 = new c.Shape();
star1.graphics.beginStroke('#000')
    .setStrokeStyle(0.3)
    .beginFill("#ccc")
    .drawPolyStar(0, 0, 150, 10, 0.54);
star1.x = 750;
star1.y = 250;
star1.scaleX = 2.5;

// Make a star for answer 2
let star2 = new c.Shape();
star2.graphics.beginStroke('#000')
    .setStrokeStyle(0.3)
    .beginFill("#ccc")
    .drawPolyStar(0, 0, 150, 10, 0.54);
star2.x = 750;
star2.y = 250;
star2.scaleX = 2.5;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let quest = "What is the best ingredient to improve poutine?";
let question = new createjs.Text().set({
    text: quest,
    textAlign: "center",
    font: "50px Arial",
    x: (stage.canvas.width / 2), // Centered wrt canvas.
    y: 200,
    lineWidth: 850 // Wrap text
});


let ans1 = "more poutine";

let ans2 = "revenge";

let answer1 = new c.Text(ans1, "30px Arial");
answer1.x = star1.x - answer1.getMeasuredWidth() / 2; // Center the text in the shape.
answer1.y = 230;

let answer2 = new c.Text(ans2, "30px Arial");
answer2.x = star2.x - answer2.getMeasuredWidth() / 2;
answer2.y = 230;

// Group together the answer + star
let p1Ans = stage.addChild(new c.Container());
p1Ans.addChild(star1, answer1);
p1Ans.x = 350;
p1Ans.y = 400;
p1Ans.rotation = -5;

let p2Ans = stage.addChild(new c.Container());
p2Ans.addChild(star2, answer2);
p2Ans.x = -380;
p2Ans.y = 400;
p2Ans.rotation = -5;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// SHOULD USE PRELOAD LATER TO LOAD IMAGES...

// Adding different player splashes

// Blue Splash with face grouped together
let smileySplash = stage.addChild(new c.Container());
let scaredSplash = stage.addChild(new c.Container());

red = new Image();
red.src = "images/redSplash.png";
red.onload = () => {
    // Adding images...
    let redSplash = new c.Bitmap(red.src);
    redSplash.x = 50;
    redSplash.y = 550;
    redSplash.scale = 0.4;
    stage.addChild(redSplash);
    stage.update();
};

blue = new Image();
blue.src = "images/blueSplash.png";
blue.onload = () => {
    let blueSplash = new c.Bitmap(blue.src);
    blueSplash.x = 400;
    blueSplash.y = 600;
    smileySplash.addChild(blueSplash);
    stage.update();
};

smiley = new Image();
smiley.src = "images/simley.png";
smiley.onload = () => {
    let smileyFace = new c.Bitmap(smiley.src);
    smileyFace.x = 515;
    smileyFace.y = 690;
    smileySplash.addChild(smileyFace);
    stage.update();
};

orange = new Image();
orange.src = "images/orangeSplash.png";
orange.onload = () => {
    let orangeSplash = new c.Bitmap(orange.src);
    orangeSplash.x = 800;
    orangeSplash.y = 600;
    scaredSplash.addChild(orangeSplash);
    stage.update();
};

scared = new Image();
scared.src = "images/scared.png";
scared.onload = () => {
    let scaredFace = new c.Bitmap(scared.src);
    scaredFace.x = 910;
    scaredFace.y = 685;
    scaredSplash.addChild(scaredFace);
    stage.update();
};

pink = new Image();
pink.src = "images/pinkSplash.png";
pink.onload = () => {
    let pinkSplash = new c.Bitmap(pink.src);
    pinkSplash.x = 1200;
    pinkSplash.y = 600;
    pinkSplash.scale = 0.4;
    stage.addChild(pinkSplash);
    stage.update();
};

smileySplash.scale = 0.4;
smileySplash.x = 750;
smileySplash.y = 230;

scaredSplash.scale = 0.4;
scaredSplash.x = 700;
scaredSplash.y = 400;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Set timer.
let time = 20;
let timeLeftColour = "blue";
let timeOverColour = "red";

let startAngle = 0.000001 * Math.PI / 180; // Radian = degrees x pi / 180
let endAngle = 0;

// Arc 1
let timeLeftCircle = new c.Shape();
timeLeftCircle.graphics.s(timeLeftColour);
timeLeftCircle
    .graphics
    .setStrokeStyle(10)
    .arc(0, 0, 45, startAngle, endAngle);
timeLeftCircle.x = 75; // Position the circle on screen
timeLeftCircle.y = 75;

// Arc 2
let timeOverCircle = new c.Shape();
timeOverCircle.graphics.s(timeOverColour);
timeOverCircle
    .graphics
    .setStrokeStyle(10)
    .arc(0, 0, 45, endAngle, startAngle);
timeOverCircle.x = timeLeftCircle.x;
timeOverCircle.y = timeLeftCircle.y;

let timerText = new c.Text(time, '50px Arial', "black");
timerText.x = 47;
timerText.y = 53;

stage.addChild(timeLeftCircle, timeOverCircle, timerText);

stage.update();

decTime = (2 / time) * Math.PI; // How much to decrease each time.

// Timer. Runs every second.
let timer = setInterval(function () {
    console.log(time);

    time -= 1; // Decrement time left.

    startAngle += decTime;

    // Remove old circles, and time left
    stage.removeChild(timeLeftCircle);
    stage.removeChild(timeOverCircle);
    stage.removeChild(timerText);

    timerText = new c.Text(time, '50px Arial', "black");
    if (time < 10) {
        timerText.x = 62; // Position for single digit num
    } else
        timerText.x = 47;
    timerText.y = 53;

    // Add new ones
    timeLeftCircle = new c.Shape();
    timeLeftCircle.graphics.s(timeLeftColour);
    timeLeftCircle
        .graphics
        .setStrokeStyle(10)
        .arc(75, 75, 45, startAngle, endAngle);

    timeOverCircle = new c.Shape();
    timeOverCircle.graphics.s(timeOverColour);
    timeOverCircle
        .graphics
        .setStrokeStyle(10)
        .arc(75, 75, 45, endAngle, startAngle);

    stage.addChild(timeLeftCircle);
    stage.addChild(timeOverCircle);
    stage.addChild(timerText);

    stage.update();

    // When timer is complete...
    if (time === 0)
        clearInterval(timer);

}, 1000);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

stage.addChild(question, p1Ans, p2Ans, smileySplash, scaredSplash);

stage.update();


