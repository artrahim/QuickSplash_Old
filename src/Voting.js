import React, { Component } from 'react';
import {socket} from './Main';

class Voting extends Component {

    componentDidMount(){
        let c = window.createjs;
        var stage = new c.Stage("canvasDisplay");

        // Make a star to for teh question and answer.
        let rectangle = new c.Shape();
        rectangle.graphics.beginStroke('#000')
            .setStrokeStyle(0.3)
            .beginFill("#ccc")
            .drawRect(250,80,800,200);


        let ansStar1 = new c.Shape();
        ansStar1.graphics.beginStroke('#000')
            .setStrokeStyle(0.3)
            .beginFill("#ccc")
            .drawPolyStar(0, 0, 100, 8, 0.54);
        ansStar1.scaleX = 2.5;

        let ansStar2 = new c.Shape();
        ansStar2.graphics.beginStroke('#000')
            .setStrokeStyle(0.3)
            .beginFill("#ccc")
            .drawPolyStar(0, 0, 100, 8, 0.54);
        ansStar2.scaleX = 2.5;

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        let quest = "What is the best ingredient to improve poutine?";

        let question = new c.Text(quest, "30px Arial");
        question.x = 340;
        question.y = 120;
        question.lineWidth = 850;


        let ans1 = "more poutine";

        let ans2 = "revenge";

        let answer1 = new c.Text(ans1, "30px Arial");
        answer1.x = ansStar1.x - answer1.getMeasuredWidth() / 2; // Center the text in the shape.
        answer1.y = -20;

        let answer2 = new c.Text(ans2, "30px Arial");
        answer2.x = ansStar2.x - answer2.getMeasuredWidth() / 2;
        answer2.y = -20;

// Group together the answer + star
        let p1Ans = new c.Container();
        p1Ans.addChild(ansStar1, answer1);
        p1Ans.x = 350;
        p1Ans.y = 350;
        p1Ans.rotation = -5;

        let p2Ans = new c.Container();
        p2Ans.addChild(ansStar2, answer2);
        p2Ans.x = 880;
        p2Ans.y = 350;
        p2Ans.rotation = 5;
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // Set timer.
        let time = 20;
        let timeLeftColour = "blue";
        let timeOverColour = "red";

        let startAngle = 275 * Math.PI / 180; // Radian = degrees x pi / 180
        let endAngle = 274.975;

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


        stage.addChild(rectangle, question, p1Ans, p2Ans);

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

export default Voting;
