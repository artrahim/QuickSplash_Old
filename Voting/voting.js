// this class isnt needed anymore

let c = createjs;

stage = new c.Stage("canvasDisplay");

// Make a star to for the question and answer.
let qRect = new c.Shape();
qRect.graphics.beginStroke('#000')
    .setStrokeStyle(0.3)
    .beginFill("#ccc")
    .drawRect(250,120,1000,250);


let ansStar = new c.Shape();
ansStar.graphics.beginStroke('#000')
    .setStrokeStyle(0.3)
    .beginFill("#ccc")
    .drawPolyStar(100, 450, 100, 8, 0.54);
ansStar.scaleX = 3;

let ansStar2 = new c.Shape();
ansStar2.graphics.beginStroke('#000')
    .setStrokeStyle(0.3)
    .beginFill("#ccc")
    .drawPolyStar(400, 450, 100, 8, 0.54);
ansStar2.scaleX = 3;

// Add question to star
let quest = "What is the best ingredient to improve poutine?";

let question = new c.Text(quest, "50px Arial");
question.x = qRect.x - question.getMeasuredWidth() / 2;
question.y = (qRect.y - qRect.h)/2;
question.lineWidth = 850;

console.log((qRect.y - qRect.height)/2);
console.log(question.y);
console.log(qRect.getBounds());

let ans1 = "revenge";
let answer1 = new c.Text(ans1, "30px Arial");
answer1.x = 310;
answer1.y = 230;

let ans2 = "more poutine";
let answer2 = new c.Text(ans2, "30px Arial");
answer2.x = 310;
answer2.y = 230;
/*
let questionContainer = stage.addChild(new c.Container());
questionContainer.addChild(qRect, question);


let ansCon1 = stage.addChild(new c.Container());
ansCon1.addChild(ansStar, ans1);
ansCon1.rotation = -5;


let ansCon2 = stage.addChild(new c.Container());
ansCon2.addChild(ansStar2, ans2);
ansCon2.rotation = 5;*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Set timer.
let time = 20;
let timeLeftColour = "blue";
let timeOverColour = "red";

let startAngle = 275 * Math.PI / 180; // Radian = degrees x pi / 180
let endAngle = 274.95;

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

stage.addChild(qRect);

stage.update();