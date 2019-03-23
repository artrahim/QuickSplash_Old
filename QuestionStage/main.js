let c = createjs;

stage = new c.Stage("canvasDisplay");

// Make a star,
let poly = new c.Shape();
poly.graphics.beginStroke('#000')
    .beginFill("#ccc")
    .drawPolyStar(0, 0, 150, 10, 0.6);
poly.x = 500;
poly.y = 150;
poly.scaleX = 3;


let counter = 25;

let shape = new c.Shape()
    .set({x: 20, y: 20});

shape.graphics.s("blue").ss(1);

let startAngle = 20;
let endAngle = -95;

shape
    .graphics
    .setStrokeStyle(5)
    .arc(0, 0, 45, startAngle, endAngle);

shape.x = 55;
shape.y = 55;


let counterText = new c.Text(counter, '50px Arial', "black");
counterText.x = 25;
counterText.y = 30;


let question = new c.Text("Where is the worst place to be naked?", "19px Arial");
question.x = 340;
question.y = 120;

let ans = new c.Text("_________________________________", "19px Arial");
ans.x = 330;
ans.y = 170;


// Group together the question and answer.
let item = stage.addChild(new c.Container());
item.addChild(question, ans);







stage.addChild(shape, counterText, poly, item);

stage.update();
