class Walker {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.tx = 0;
        this.ty = 10000;
    }
  
    render() {
        sketch.push();
        sketch.stroke(0);
        sketch.fill(0, 100);
        sketch.ellipse(this.x, this.y, 50, 50);
        sketch.pop();
    }
  
    step() {
        this.x = sketch.map(sketch.noise(this.tx), 0, 1, 0, sketch.width);
        this.y = sketch.map(sketch.noise(this.ty), 0, 1, 0, sketch.height);
     
        this.tx += 0.02;
        this.ty += 0.02;
    };
}

export default Walker;