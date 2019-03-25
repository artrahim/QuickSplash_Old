import React, { Component } from 'react';
import {socket} from './Main';

class Game extends Component {

    componentDidMount(){
        let c = window.createjs;
        var stage = new c.Stage("canvasDisplay");

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

        // SHOULD USE window.window.preload LATER TO LOAD IMAGES...

        // Adding different smileySplash splashes

        var red = new Image();
        red.src = "./images/redSplash.png";
        red.onload = () => {
            // Adding images...
            let redSplash = new c.Bitmap(red.src);
            redSplash.x = 30;
            redSplash.y = 600;
            stage.addChild(redSplash);
            stage.update();
        };

        var blue = new Image();
        blue.src = "./images/blueSplash.png";
        blue.onload = () => {
            let blueSplash = new c.Bitmap(blue.src);
            blueSplash.x = 400;
            blueSplash.y = 600;
            stage.addChild(blueSplash);
            stage.update();
        };

        var smiley = new Image();
        smiley.src = "./images/simley.png";
        smiley.onload = () => {
            let smileyFace = new c.Bitmap(smiley.src);
            smileyFace.x = 515;
            smileyFace.y = 690;
            stage.addChild(smileyFace);
            stage.update();
        };

        var orange = new Image();
        orange.src = "./images/orangeSplash.png";
        orange.onload = () => {
            let orangeSplash = new c.Bitmap(orange.src);
            orangeSplash.x = 800;
            orangeSplash.y = 600;
            stage.addChild(orangeSplash);
            stage.update();
        };

        var scared = new Image();
        scared.src = "./images/scared.png";
        scared.onload = () => {
            let scaredFace = new c.Bitmap(scared.src);
            scaredFace.x = 910;
            scaredFace.y = 685;
            stage.addChild(scaredFace);
            stage.update();
        };

        var pink = new Image();
        pink.src = "./images/pinkSplash.png";
        pink.onload = () => {
            let pinkSplash = new c.Bitmap(pink.src);
            pinkSplash.x = 1200;
            pinkSplash.y = 600;
            stage.addChild(pinkSplash);
            stage.update();
        };

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

        var decTime = (2 / time) * Math.PI; // How much to decrease each time.

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


        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        stage.addChild(star, item);

        stage.update();

    }

    render() {
        return (
            <div className="display">
                <canvas id="canvasDisplay" width={1500} height={1000} />
            </div>
        );
    }

}

export default Game;
