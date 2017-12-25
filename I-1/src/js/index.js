import p5lib from "p5";
import Walker from "./Walker";

const app = function (sketch) {

    let walker;
    window.p5 = p5lib;
    window.sketch = sketch;

    sketch.setup = () => {
        sketch.createCanvas(640,360);
        sketch.background(127);
        walker = new Walker();
    }
    
    sketch.draw = () => {
        walker.step();
        walker.render();
    }
};

new p5lib(app);