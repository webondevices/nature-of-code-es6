import p5lib from "p5";

const app = function (sketch) {
    
    let walker;
    window.p5 = p5lib;
    window.sketch = sketch;

    sketch.setup = () => {
        sketch.createCanvas(640,360);
        sketch.background(127);
    }
    
    sketch.draw = () => {
        let num = sketch.randomGaussian();
        let sd = 60;
        let mean = 320;
       
        let x = sd * num + mean;
       
        sketch.noStroke();
        sketch.fill(0,10);
        sketch.ellipse(x, 180, 16, 16);
    }
};

new p5lib(app);