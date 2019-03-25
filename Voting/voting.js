let c = createjs;

stage = new c.Stage("canvasDisplay");

// Make a star to for the question and answer.
let star = new c.Shape();
star.graphics.beginStroke('#000')
    .setStrokeStyle(0.3)
    .beginFill("#ccc")
    .drawPolyStar(250, 250, 240, 10, 0.54);
star.scaleX = 3;


let ansStar = new c.Shape();
ansStar.graphics.beginStroke('#000')
    .setStrokeStyle(0.3)
    .beginFill("#ccc")
    .drawPolyStar(0, 100, 100, 8, 0.54);
ansStar.scaleX = 3;

let ansStar2 = new c.Shape();
ansStar.graphics.beginStroke('#000')
    .setStrokeStyle(0.3)
    .beginFill("#ccc")
    .drawPolyStar(100, 100, 100, 8, 0.54);
ansStar.scaleX = 3;

// Add question to star
let quest = "What is the best ingredient to improve poutine?";

let question = new c.Text(quest, "44px Arial");
question.x = 310;
question.y = 230;

stage.addChild(star, question, ansStar, ansStar2);

stage.update();