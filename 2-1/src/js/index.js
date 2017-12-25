import p5lib from "p5";
import Mover from "./Mover";

const app = function (sketch) {

    let mover;
    window.p5 = p5lib;
    window.sketch = sketch;

    sketch.setup = () => {
        sketch.createCanvas(640,360);
        sketch.background(127);
        mover = new Mover();
    }
    
    sketch.draw = () => {
        sketch.fill(127);
        sketch.rect(0, 0, sketch.width, sketch.height);

        mover.update();
        mover.checkEdges();
        mover.display();
    }
};

new p5lib(app);